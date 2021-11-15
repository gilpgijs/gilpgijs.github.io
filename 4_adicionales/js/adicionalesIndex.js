import { adicionalesContenido } from "./adicionalesContenido.js";

export function adicionalesIndex() {
 return (/* html */
  `<h1 class="leccion">4. Herramientas de apoyo</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank" rel="noopener">Versión para Imprimir.</a>
    </p>
    <nav>
     <h1>Contenido</h1>
     ${adicionalesContenido()}
    </nav>
   </div>`)
}