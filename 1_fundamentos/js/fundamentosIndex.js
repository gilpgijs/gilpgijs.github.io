import { fundamentosContenido } from "./fundamentosContenido.js"

export function fundamentosIndex() {
 return (/* html */
  `<h1 class="leccion">1. Fundamentos</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
    </p>
    <h2>Contenido</h2>
    <nav>
     ${fundamentosContenido()}
    </nav>
   </div>`)
}