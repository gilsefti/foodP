using FoodBl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FoodApi.Controllers
{
    public class LunchBoxController : ApiController
    {
        [ActionName("Dishes")]
        ///id parameter is  user Id
        public List<Dish> GetDishes(int id)
        {
            var foodDb = new FoodBl.foodEntities();
            var dishes =  foodDb.Dishes;
            var lunchBoxes = foodDb.LunchBoxes;
                var users = foodDb.Users;
            var query = from dish in dishes
                        join
                            LB in lunchBoxes
                            on dish.ID equals LB.DishId
                            join usr in users
                            on LB.UserID  equals usr.ID
                            where usr.ID == id
                        select dish;
                        

            List<Dish> ls = query.ToList();
            return ls;
        }

    }
}
