import { conceptosContenido } from "./conceptosContenido.js";

export function conceptosIndex() {
 return (/* html */
  `<h1 class="leccion">2. Conceptos básicos</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
    </p>
    <h2>Contenido</h2>
    <nav>
     ${conceptosContenido()}
    </nav>
   </div>`)
}