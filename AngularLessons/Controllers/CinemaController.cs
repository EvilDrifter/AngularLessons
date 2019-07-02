using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularLessons.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CinemaController : ControllerBase
    {
        IList<CinemaFilm> result;

        public CinemaController()
        {
            result = new List<CinemaFilm>();

            for (int i = 0; i < 10; i++)
            {
                result.Add(new CinemaFilm(i, $"Title{i}", $"Rating{i}", $"Description{i}"));
            }
        }

        [HttpGet("action")]
        [Route("getAll")]
        public IEnumerable<CinemaFilm> GetAll()
        {
            return result;
        }

        [HttpGet("action")]
        [Route("get/{id}")]
        public CinemaFilm GetItem(int id)
        {
            return result.FirstOrDefault(x=>x.Id == id);
        }

    }
}