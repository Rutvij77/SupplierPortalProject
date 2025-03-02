﻿using CollegeProject.Models;
using Microsoft.EntityFrameworkCore;

namespace CollegeProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }

        public DbSet<Admin> Admin { get; set; }

        public DbSet<Customer> Customer { get; set; }

        public DbSet<WareHouse> WareHouse { get; set; }

        public DbSet<WareHouseManager> WareHouseManager { get; set; }

        public DbSet<Supplier> Supplier { get; set; }

        public DbSet<Product> Product { get; set; }

        public DbSet<Order> Order { get; set; }

        public DbSet<SupplierOrder> SupplierOrder { get; set; }

        public DbSet<WareHouseManagerOrder> WareHouseManagerOrder { get;set; }

        public DbSet<DeliveryPerson> DeliveryPerson { get; set; }
    }
}
