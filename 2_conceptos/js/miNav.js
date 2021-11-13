/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { conceptosContenido } from "./conceptosContenido.js"
export function miNav() {
 return (/* html */
  `<p><a href="/1_fundamentos/l_resumen.html">1. Fundamentos/L. Resumen</a></p>
   <h1><a href="/2_conceptos/index.html">2. Conceptos básicos</a></h1>
   ${conceptosContenido()}
   <section>
    <h1><a href="/3_variables/index.html">3. Variables</a></h1>
   </section>`)
}