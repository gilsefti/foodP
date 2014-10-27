using ImageResizer;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace FoodApi.Controllers
{
    public class FilesController : ApiController
    {
   

         [ActionName("Save")]
          public async Task<HttpResponseMessage> PostSave()
          {
              if (!Request.Content.IsMimeMultipartContent())
              {
                  return Request.CreateResponse(HttpStatusCode.UnsupportedMediaType, "Unsupported media type.");
              }

              // Read the file and form data.
              MultipartFormDataMemoryStreamProvider provider = new MultipartFormDataMemoryStreamProvider();
              await Request.Content.ReadAsMultipartAsync(provider);

              // Extract the fields from the form data.
              string dishIdStr = provider.FormData["dishId"];
              int dishId = Convert.ToInt32(dishIdStr);
             

              // Check if files are on the request.
              if (!provider.FileStreams.Any())
              {
                  return Request.CreateResponse(HttpStatusCode.BadRequest, "No file uploaded.");
              }

              IList<string> uploadedFiles = new List<string>();
              foreach (KeyValuePair<string, Stream> file in provider.FileStreams)
              {
                  string fileName = file.Key;
                  Stream stream = file.Value;

                  //Stream stThumbSource = new MemoryStream(await item.ReadAsByteArrayAsync());

                  MemoryStream stOut = new MemoryStream();
                  var settings = new ResizeSettings
                  {
                      MaxWidth = 60,
                      MaxHeight = 60,
                      //Format = "jpg",
                      Mode = FitMode.Max
                  };
                  ImageBuilder.Current.Build(stream, stOut, settings);
                  //Byte[] imgByte = null;
                  // imgByte = new Byte[stOut.Length];
                  var imgByte = stOut.ToArray();
                  //force the control to load data in array
                  stOut.Read(imgByte, 0, (int)stOut.Length);


                  var foodDb = new FoodBl.foodEntities();
                  FoodBl.Img img = new FoodBl.Img();
                  img.FileStreem = imgByte;
                  //img.DishId = ID;
                  img.DishId = dishId;           
                  foodDb.Imgs.Add(img);
                  foodDb.SaveChanges();
              }

              return Request.CreateResponse(HttpStatusCode.OK, "Successfully Uploaded: " + string.Join(", ", uploadedFiles));
          }

        
         [ActionName("FileIds")]
          public List<int> GetFileIds()
          {
              var foodDb = new FoodBl.foodEntities();
              var data = from i in foodDb.Imgs
                         select i.ID;
              return data.ToList();
          }

          [ActionName("File")]
          public HttpResponseMessage GetFile(int ID)
          {
              try
              {
                  var foodDb = new FoodBl.foodEntities();
                  var data = from i in foodDb.Imgs
                             where i.ID == ID
                             select i;
                  FoodBl.Img img = (FoodBl.Img)data.SingleOrDefault();
                  byte[] imgData = img.FileStreem;
                  MemoryStream ms = new MemoryStream(imgData);
                  HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                  response.Content = new StreamContent(ms);
                  response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("image/png");
                  return response;
              }
              catch (Exception ex)
              {
                  return null;
              }
          }

          [ActionName("DishFiles")]
          public HttpResponseMessage GetDishFiles(int ID)
          {
              try
              {
                  var foodDb = new FoodBl.foodEntities();
                  var data = from i in foodDb.Imgs
                             where i.DishId == ID
                             select i;
                  FoodBl.Img img = (FoodBl.Img)data.SingleOrDefault();
                  byte[] imgData = img.FileStreem;
                  MemoryStream ms = new MemoryStream(imgData);
                  HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                  response.Content = new StreamContent(ms);
                  response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("image/png");
                  return response;
              }
              catch (Exception ex) {
                  return null;
              }
          }   
    }
}