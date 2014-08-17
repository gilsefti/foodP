using FoodBl;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FoodApi.Controllers
{
   
    public class DishController : ApiController
    {

        [ActionName("AddDish")]
        public Dish PostAddDish(Dish dis)
        {
            try
            {
                var foodDb = new FoodBl.foodEntities();
                foodDb.Dishes.Add(dis);
                foodDb.SaveChanges();
                return dis;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

      

        [ActionName("Dishes")]
        ///id parameter is  place Id
        public List<Dish> GetDishes(int id)
        {
            var foodDb = new FoodBl.foodEntities();
            var query = from dish in foodDb.Dishes
                        where dish.PlaceID == id
                        select dish;
            List<Dish> ls = query.ToList();
            return ls;
        }

        [ActionName("AddLB")]
        public void PostAddLB(JObject jsonData)
        {
            try
            {
                dynamic json = jsonData;
                JObject jdish = json.dish;
                int userId = json.usr;
                Dish dish = jdish.ToObject<Dish>();
                var foodDb = new FoodBl.foodEntities();
                LunchBox lb = new LunchBox();
                lb.DishId = dish.ID;
                lb.UserID = 1;
                foodDb.LunchBoxes.Add(lb);
                foodDb.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}
