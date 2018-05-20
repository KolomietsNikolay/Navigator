using NavigatorKhPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NavigatorKhPI.WEB.Models
{
    public class GroupModel
    {
        public string Name { get; set; }

        public Group GetEntity(int id = 0)
        {
            return new Group()
            {
                Id = id,
                Name = this.Name
            };
        }
    }
}
