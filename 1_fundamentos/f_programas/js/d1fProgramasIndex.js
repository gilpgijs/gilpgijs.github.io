import { d1fProgramasContenido } from "./d1fProgramasContenido.js"

export function d1fProgramasIndex() {
 return ( /* html */
  `<h1>F. Otros tipos de programas</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
    </p>
    <nav>
     ${d1fProgramasContenido()}
    </nav>
   </div>`)
}