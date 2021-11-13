/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { conceptosContenido } from "./conceptosContenido.js"
export function miNav() {
 return (/* html */
  `<p><a href="/1_fundamentos/l_resumen.html" class="leccionAnterior" title="Resumen">▲</a></p>
   <h1><a href="/2_conceptos/index.html">Conceptos básicos</a></h1>
   ${conceptosContenido()}
   <p><a href="/3_variables/index.html" class="leccionSiguiente" title="Variables">▼</a></p>`)
}