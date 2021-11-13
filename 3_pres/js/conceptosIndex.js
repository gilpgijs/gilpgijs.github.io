import { conceptosContenido } from "./conceptosContenido.js";

export function conceptosIndex() {
 return (/* html */
  `<h1 class="leccion">2. Conceptos básicos</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank" rel="noopener">Versión para Imprimir.</a>
    </p>
    <nav>
     <h1>Contenido</h1>
     ${conceptosContenido()}
    </nav>
   </div>`)
}