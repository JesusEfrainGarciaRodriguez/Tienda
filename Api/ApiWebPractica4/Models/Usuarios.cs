using System;
using System.Collections.Generic;

namespace ApiWebPractica4.Models
{
    public partial class Usuarios
    {
        public long Id { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
    }
}
