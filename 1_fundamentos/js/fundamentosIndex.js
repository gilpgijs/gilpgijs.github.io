import { fundamentosContenido } from "./fundamentosContenido.js"

export function fundamentosIndex() {
 return (/* html */
  `<h1 class="leccion">1. Fundamentos</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
    </p>
    <nav>
     <h1>Contenido</h1>
     ${fundamentosContenido()}
    </nav>
   </div>`)
}