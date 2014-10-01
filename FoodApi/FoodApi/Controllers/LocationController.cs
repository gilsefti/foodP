using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FoodBl;
using Newtonsoft.Json.Linq;

namespace FoodApi.Controllers
{
    public class LocationController : ApiController
    {
        [ActionName("Val")]
        public string GetVal()
        {
            return "value1111";
        }

        [ActionName("Places")]
        public List<Place> PostPlaces(JObject jsonData)
        {
            dynamic json = jsonData;
            string subStr = json.subStr;
            var foodDb = new FoodBl.foodEntities();
            var query = (from plac in foodDb.Places
                        where plac.Name.StartsWith(subStr)
                        select plac).Take(10);
            List<Place> ls = query.ToList();
            return ls;
        }

        [ActionName("AddPlace")]
        public Place PostAddPlace(Place plc)
        {
         
            try
            {
                var foodDb = new FoodBl.foodEntities();
                foodDb.Places.Add(plc);
                foodDb.SaveChanges();
                return plc;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }       
    }
}
