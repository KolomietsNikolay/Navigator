using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace NavigatorKhPI.Data.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public DateTime LastActive { get; set; }
    }
}
