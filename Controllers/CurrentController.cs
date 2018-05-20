using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NavigatorKhPI.Data;
using NavigatorKhPI.Data.Entities;
using NavigatorKhPI.WEB.Models;

namespace NavigatorKhPI.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/Current")]
    public class CurrentController : Controller
    {
        private readonly ApplicationDbContext context;
        private string idClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

        public CurrentController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("/leasson/{groupId:required}")]
        public Leasson GetCurrentLeasson(int groupId)
        {
            return this.context.Leassons.Include(x => x.Group).Include(x => x.Location)
                .FirstOrDefault(x => x.End >= DateTime.Now && x.Start.AddMinutes(-35) >= DateTime.Now && x.Group.Id == groupId);
        }

        [HttpGet]
        [Route("/leassons/{groupId:required}")]
        public IEnumerable<Leasson> GetLeassons(int groupId)
        {
            return this.context.Leassons.Include(x => x.Group).Include(x => x.Location).OrderBy(x => x.Start)
                .Where(x => x.Group.Id == groupId);
        }

        [HttpPost]
        [Route("/setPosition")]
        public void SetCurrentPosition([FromBody]CurrentPosition currentPosition)
        {     
            var user = this.context.Users.FirstOrDefault(x => x.Id == currentPosition.Id);
            if (user != null)
            {
                user.Latitude = currentPosition.Latitude;
                user.Longitude = currentPosition.Longitude;
                user.LastActive = DateTime.Now;
                this.context.Update(user);
                this.context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult GetPositionsUsers()
        {
            return Ok(this.context.Users.Where(x => x.LastActive <= DateTime.Now && x.LastActive >= DateTime.Now.AddMinutes(-20))
                .ToList().Select(x => new { x.Id, x.LastActive, x.Latitude, x.Longitude, x.PhoneNumber }));
        }

        public ActionResult IsRegistryPhone()
        {
            var user = this.context.Users.FirstOrDefault(x => x.Id == this.UserId);
            return Ok(!string.IsNullOrEmpty(user?.PhoneNumber));
        }

        [HttpPost]
        [Route("/registry")]
        public ActionResult RegistryPhone([FromBody]RegistryModel model)
        {
            ApplicationUser newUser = new ApplicationUser()
            {
                PhoneNumber = model.Phone,
                UserName = model.Name
            };

            this.context.Users.Add(newUser);
            this.context.SaveChanges();
            var userRegistred = this.context.Users.FirstOrDefault(x => x.UserName == model.Name && x.PhoneNumber == model.Phone);

            return Ok(userRegistred.Id);
        }

        public string UserId
        {
            get
            {
                var ident = User.Identity as ClaimsIdentity;
                var userID = ident.Claims.FirstOrDefault(c => c.Type == idClaimType)?.Value;
                return userID;
            }
        }
    }
}