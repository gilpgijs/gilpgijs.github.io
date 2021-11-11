import { d1fProgramasContenido } from "./d1fProgramasContenido.js"

export function d1fProgramasIndex() {
 return ( /* html */
  `<h1>F. Otros tipos de programas</h1>
   <div class="lectura">
    <p class="noPrint">
     <nav>
      ${d1fProgramasContenido()}
     </nav>
    </p>
   </div>`)
}