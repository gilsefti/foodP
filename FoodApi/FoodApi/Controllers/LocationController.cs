using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FoodBl;

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
        public List<Place> GetPlaces()
        {
            var foodDb = new FoodBl.foodEntities();
            var query = from plac in foodDb.Places
                        select plac;
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
