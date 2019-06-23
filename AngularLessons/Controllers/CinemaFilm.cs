using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularLessons.Controllers
{
    public class CinemaFilm
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Rating { get; set; }
        public string Description { get; set; }

        public CinemaFilm(int _id, string _title, string _rating, string _description)
        {
            this.Id = _id;
            this.Title = _title;
            this.Rating = _rating;
            this.Description = _description;
        }
    }
}
