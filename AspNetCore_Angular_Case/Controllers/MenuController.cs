using AspNetCore_Angular_Case.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Text.Json;

namespace AspNetCore_Angular_Case.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class MenuController : ControllerBase
    {
        private readonly ILogger<MenuController> _logger;
        private readonly IWebHostEnvironment _env;
        public MenuController(ILogger<MenuController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IEnumerable<Menu> Get()
        {
            var jsonString = System.IO.File.ReadAllText(@"wwwroot\Menus.json");
            return JsonSerializer.Deserialize<List<Menu>>(jsonString);
        }
    }
}