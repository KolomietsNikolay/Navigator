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
    [Route("api/Leasson")]
    public class LeassonController : Controller
    {
        private readonly IRepository<Leasson> repository;
        private readonly IRepository<Group> repositoryGroup;
        private readonly IRepository<Location> repositoryLocation;

        public LeassonController(IRepository<Leasson> repository, IRepository<Group> repositoryGroup, IRepository<Location> repositoryLocation)
        {
            this.repository = repository;
            this.repositoryLocation = repositoryLocation;
            this.repositoryGroup = repositoryGroup;
        }

        // GET: api/Group
        [HttpGet]
        public IEnumerable<Leasson> Get()
        {
            return this.repository.GetAll();
        }

        // GET: api/Group/5
        [HttpGet("{id}")]
        public Leasson Get(int id)
        {
            return this.repository.Get(id);
        }

        // POST: api/Group
        [HttpPost]
        public void Post([FromBody]LeassonModel value)
        {
            this.repository.Create(value.GetEntity(this.repositoryGroup, this.repositoryLocation));
        }

        // PUT: api/Group/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]LeassonModel value)
        {
            this.repository.Update(id, value.GetEntity(this.repositoryGroup, this.repositoryLocation, id));
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this.repository.Delete(id);
        }
    }
}