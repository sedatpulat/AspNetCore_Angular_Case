using AspNetCore_Angular_Case.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Text.Json;

namespace AspNetCore_Angular_Case.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var jsonString = System.IO.File.ReadAllText(@"wwwroot\Products.json");
            return JsonSerializer.Deserialize<List<Product>>(jsonString);
        }
    }
}