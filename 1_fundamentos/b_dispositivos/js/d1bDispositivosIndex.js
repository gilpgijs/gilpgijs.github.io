import { d1bDispositivosContenido } from "./d1bDispositivosContenido.js"

export function d1bDispositivosIndex() {
 return ( /* html */
  `<h1>B. Tipos de computadoras</h1>
   <div class="lectura">
    <p class="noPrint">
     <nav>
      ${d1bDispositivosContenido()}
     </nav>
    </p>
   </div>`)
}