using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NavigatorKhPI.Data.Entities;
using NavigatorKhPI.Data.Repository;
using NavigatorKhPI.WEB.Models;

namespace NavigatorKhPI.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/Location")]
    public class LocationController : Controller
    {
        private readonly IRepository<Location> repository;

        public LocationController(IRepository<Location> repository)
        {
            this.repository = repository;
        }

        // GET: api/Group
        [HttpGet]
        public IEnumerable<Location> Get()
        {
            return this.repository.GetAll();
        }

        // GET: api/Group/5
        [HttpGet("{id}")]
        public Location Get(int id)
        {
            return this.repository.Get(id);
        }

        // POST: api/Group
        [HttpPost]
        public void Post([FromBody]LocationModel value)
        {
            this.repository.Create(value.GetEntity());
        }

        // PUT: api/Group/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]LocationModel value)
        {
            this.repository.Update(id, value.GetEntity(id));
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this.repository.Delete(id);
        }
    }
}