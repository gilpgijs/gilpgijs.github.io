/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { conceptosContenido } from "./conceptosContenido.js"
export function miNav() {
 return (/* html */
  `<ol>
    <li>
     <section>
      <h1><a href="/1_fundamentos/index.html">Fundamentos</a></h1>
     </section>
     <ol type="A" start="12">
      <li>
       <p><a href="/1_fundamentos/l_resumen.html">Resumen</a></p>
      </li>
     </ol>
    </li>
    <li>
     <h1><a href="/2_conceptos/index.html">Conceptos básicos</a></h1>
     ${conceptosContenido()}
    </li>
    <li>
     <section>
      <h1><a href="/3_pres/index.html">Prueba de escritorio básica</a></h1>
     </section>
    </li>
   </ol>`)
}