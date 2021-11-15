import { variablesContenido } from "./variablesContenido.js";

export function variablesIndex() {
 return (/* html */
  `<h1 class="presentación">5. Variables</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank" rel="noopener">Versión para Imprimir.</a>
    </p>
    <nav>
     <h1>Contenido</h1>
      ${variablesContenido()}
    </nav>
   </div>`)
}