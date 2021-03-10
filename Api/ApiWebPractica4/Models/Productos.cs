using System;
using System.Collections.Generic;

namespace ApiWebPractica4.Models
{
    public partial class Productos
    {
        public long Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public double Precio { get; set; }
        public string ImgSrc { get; set; }
    }
}
