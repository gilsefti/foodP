using System;
using System.Collections.Generic;
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
         [ActionName("SaveFile")]
        public Task<HttpResponseMessage> PostSaveFile()
        {
            HttpRequestMessage request = this.Request;
            if (!request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            //string root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
            var provider = new MultipartFormDataStreamProvider("c:");

            var task = request.Content.ReadAsMultipartAsync(provider);
             //.ContinueWith<HttpResponseMessage>(o =>
             //   {

             //       string file1 = provider.BodyPartFileNames.First().Value;
             //       // this is the file name on the server where the file was saved 

             //       return new HttpResponseMessage()
             //       {
             //           Content = new StringContent("File uploaded.")
             //       };
             //   }
            //);
            return null;
        }

          [ActionName("Save")]
         public string PostSave(int id)
         {
             HttpPostedFile File = HttpContext.Current.Request.Files["recFile"];
             if (File == null)
                 return null;
             Byte[] imgByte = null;
              imgByte = new Byte[File.ContentLength];
             //force the control to load data in array
             File.InputStream.Read(imgByte, 0, File.ContentLength);
             var foodDb = new FoodBl.foodEntities();
             FoodBl.Img img = new FoodBl.Img();
             img.FileStreem = imgByte;
             img.DishId = id;            
             foodDb.Imgs.Add(img);
             foodDb.SaveChanges();
             return "";
             //return Utils.UploadToServer(file);
         }
    }
}