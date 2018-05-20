using NavigatorKhPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NavigatorKhPI.WEB.Models
{
    public class LocationModel
    {
        public string Name { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string Kourpus { get; set; }

        public string Auditory { get; set; }

        public Location GetEntity(int id = 0)
        {
            return new Location()
            {
                Id = id,
                Auditory = this.Auditory,
                Kourpus = this.Kourpus,
                Latitude = this.Latitude,
                Longitude = this.Longitude,
                Name = this.Name
            };
        }
    }
}
