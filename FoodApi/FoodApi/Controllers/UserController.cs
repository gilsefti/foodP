using FoodBl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FoodApi.Controllers
{
    public class UserController : ApiController
    {
        [ActionName("Login")]
        ///id parameter is  place Id
        public List<User> PostLogin(User user)
        {
            try
            {
                var foodDb = new FoodBl.foodEntities();
                var users = foodDb.Users;

                var query = from usr in users
                            where usr.UserName == user.UserName
                            && usr.Password == user.Password
                            select usr;
                List<User> ls = query.ToList();
                return ls;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
