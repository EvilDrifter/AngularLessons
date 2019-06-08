using Microsoft.AspNetCore.Mvc;

namespace AngularLessons.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JsonDataController : ControllerBase
    {
        [HttpGet("[action]")]
        [Route("getJson")]
        public string GetJsonFile()
        {
            return System.IO.File.ReadAllText("./Controllers/data.json");
        }
    }
}