using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NavigatorKhPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NavigatorKhPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Group> Groups { get; set; }

        public DbSet<Leasson> Leassons { get; set; }

        public DbSet<Location> Locations { get; set; }

        public DbSet<ApplicationUser> Users { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        private static DbContextOptions GetOptions(string connectionString)
        {
            return SqlServerDbContextOptionsExtensions.UseSqlServer(new DbContextOptionsBuilder(), connectionString).Options;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
