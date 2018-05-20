using System;
using System.Collections.Generic;
using System.Text;

namespace NavigatorKhPI.Data.Repository
{
    public interface IRepository<T>
    {
        T Get(int id);

        IEnumerable<T> GetAll();

        void Create(T model);

        void Update(int id, T model);

        void Delete(int id);
    }
}
