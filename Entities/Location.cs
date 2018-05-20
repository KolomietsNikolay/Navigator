using System;
using System.Collections.Generic;
using System.Text;

namespace NavigatorKhPI.Data.Entities
{
    public class Location : Base
    {
        public string Name { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public double XPostion { get; set; }

        public double YPostion { get; set; }

        public string Kourpus { get; set; }

        public string Auditory { get; set; }
    }
}
