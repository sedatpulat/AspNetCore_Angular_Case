using AspNetCore_Angular_Case.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace AspNetCore_Angular_Case.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PageController : ControllerBase
    {
        private readonly ILogger<PageController> _logger;
        private readonly IWebHostEnvironment _env;
        public PageController(ILogger<PageController> logger, IWebHostEnvironment env)
        {
            _logger = logger;
            _env = env;
        }
        [HttpGet]
        public IEnumerable<Page> Get()
        {
            var pageList = new List<Page>();
            
            for (int i = 0; i < 10; i++)
            {
                pageList.Add(new Page
                {
                    Id = i + 1,
                    Name = "Menu " + (i + 1),
                    Content = ""
                });
            }
            return pageList;
        }

        [HttpGet]
        public Page Get(int id)
        {
            var page = new Page
            {
                Id = id,
                Content = "Content " + id
            };

            return page;
        }
    }
}