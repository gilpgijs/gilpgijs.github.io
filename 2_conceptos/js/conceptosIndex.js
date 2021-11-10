import { conceptosContenido } from "./conceptosContenido.js";

export function conceptosIndex() {
 return (/* html */
  `<h1 class="leccion">2. Conceptos básicos</h1>
   <div class="lectura">
    <h2>Contenido</h2>
    ${conceptosContenido()}
   </div>`)
}