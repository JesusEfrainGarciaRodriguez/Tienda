using ApiWebPractica4.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiWebPractica4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // GET: api/<LoginController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LoginController>/5
        [HttpGet("{id}", Name = "GetLogin")]
        public string GetLogin(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Post([FromBody] Usuarios value)
        {
            try
            {
                tiendaContext db = new tiendaContext();

                Usuarios usuario = db.Usuarios.Where(u => u.Usuario == value.Usuario && u.Password == value.Password).SingleOrDefault();

                if (usuario == null)
                    throw new Exception("Usuario o contraseña incorrectos");

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("KeyForSignInUpsin@2020"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                List<Claim> LstClaim = new List<Claim>
                {
                    new Claim("nombre",usuario.Usuario),
                    new Claim("test","upsin")
                };

                var tokenOptions = new JwtSecurityToken(
                    issuer: "http://localhost:2000",
                    audience: "http://localhost:2000",
                    claims: LstClaim,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: signinCredentials
                );

                var TokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                return Ok(new { token = TokenString });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
