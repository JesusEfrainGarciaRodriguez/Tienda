using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiWebPractica4.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiWebPractica4.Controllers
{
	//[Authorize]
	[Route("api/[controller]")]
	[ApiController]
	public class ProductosController : ControllerBase
	{

		// GET: api/<ProductosController>
		[HttpGet]
		public IActionResult Get()
		{
			try 
			{
				tiendaContext db = new tiendaContext();
				List<Productos> ListProductos = db.Productos.ToList();
				return Ok(ListProductos);
			}
			catch (Exception)
			{
				return BadRequest();
			}
		}

		// GET api/<ProductosController>/5
		[HttpGet("{id}")]
		public IActionResult Get(long id)
		{
			try
            {
				tiendaContext db = new tiendaContext();

				//Productos Producto = db.Productos.Find(id);
				Productos Producto = db.Productos.Where(a => a.Id == id).SingleOrDefault();
				return Ok(Producto);
			}
			catch (Exception)
            {
				return BadRequest();
            }
			
		}
		[HttpGet("buscar/{texto}", Name = "GetBusqueda")]
		public IActionResult GetBusqueda(string texto)
        {
            try
            {	
				if(texto.Length < 3) { return Ok(); }
				
				tiendaContext db = new tiendaContext();

				List<Productos> LstProductos = db.Productos.Where(b => b.Nombre.Contains(texto)).ToList();

				return Ok(LstProductos);
            }
            catch (Exception)
            {
				return BadRequest();
            }

        }

		// POST api/<ProductosController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<ProductosController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<ProductosController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
