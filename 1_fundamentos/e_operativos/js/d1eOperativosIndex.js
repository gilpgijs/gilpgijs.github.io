import { d1eOperativosContenido } from "./d1eOperativosContenido.js"

export function d1eOperativosIndex() {
 return ( /* html */
  `<h1>E. Ejemplos de sistemas operativos</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
     <nav>
      ${d1eOperativosContenido()}
     </nav>
    </p>
   </div>`)
}