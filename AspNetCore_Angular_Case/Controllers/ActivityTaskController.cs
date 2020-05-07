using AspNetCore_Angular_Case.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace AspNetCore_Angular_Case.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityTaskController : Controller
    {
        private readonly ILogger<ActivityTaskController> _logger;
        private readonly IWebHostEnvironment _env;
        public ActivityTaskController(ILogger<ActivityTaskController> logger, IWebHostEnvironment env)
        {
            _logger = logger;
            _env = env;
        }
    }
}