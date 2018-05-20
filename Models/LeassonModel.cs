using NavigatorKhPI.Data.Entities;
using NavigatorKhPI.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NavigatorKhPI.WEB.Models
{
    public class LeassonModel
    {
        public int GroupId { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }

        public int LocationId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public Leasson GetEntity(IRepository<Group> repositoryGroup, IRepository<Location> repositoryLocation, int id = 0)
        {
            return new Leasson()
            {
                Id = id,
                Description = this.Description,
                Name = this.Name,
                Start = this.Start,
                End = this.End,
                Group = repositoryGroup.Get(this.GroupId),
                Location = repositoryLocation.Get(this.LocationId)
            };
        }
    }
}
