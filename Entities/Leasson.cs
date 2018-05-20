using System;
using System.Collections.Generic;
using System.Text;

namespace NavigatorKhPI.Data.Entities
{
    public class Leasson : Base
    {
        public Group Group { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }

        public Location Location { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
