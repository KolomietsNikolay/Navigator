using Microsoft.EntityFrameworkCore;
using NavigatorKhPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NavigatorKhPI.Data.Repository
{
    public class Repository<T> : IRepository<T> where T : Base
    {
        private readonly DbSet<T> dbSet;
        private readonly ApplicationDbContext context;

        public Repository(ApplicationDbContext context)
        {
            this.context = context;
            this.dbSet = context.Set<T>();
        }

        public void Create(T model)
        {
            dbSet.Add(model);
            this.context.SaveChanges();
        }

        public void Delete(int id)
        {
            var model = this.dbSet.FirstOrDefault(x => x.Id == id);
            this.dbSet.Remove(model);
            this.context.SaveChanges();
        }

        public T Get(int id)
        {
            return this.dbSet.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<T> GetAll()
        {
            return this.dbSet.ToList();
        }

        public void Update(int id, T model)
        {
            this.context.Entry(model).State = EntityState.Modified;
            this.context.SaveChanges();
        }
    }
}
