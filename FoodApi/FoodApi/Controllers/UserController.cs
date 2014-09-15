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

        [ActionName("LogFB")]
        public User GetLogFB(long id)
        {
            try
            {
                var foodDb = new FoodBl.foodEntities();
                var users = foodDb.Users;


                var query = from usr in users
                            where usr.FacebookID == id
                            select usr;
                List<User> ls = query.ToList();
                if (ls.Count == 0)
                    return NewUser(id);
                else
                    return ls[0];
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        private User NewUser(long facebookId)
        {
            var foodDb = new FoodBl.foodEntities();
            var users = foodDb.Users;
            User newUser = new FoodBl.User();
            newUser.FacebookID = facebookId;
            users.Add(newUser);
            foodDb.SaveChanges();
            return newUser;
        }
    }

}
