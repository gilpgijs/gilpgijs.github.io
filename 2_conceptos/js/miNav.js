/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { conceptosContenido } from "./conceptosContenido.js"
export function miNav() {
 return (/* html */
  `<div class="miNav">
    <p><a href="/index.html">Regresar a Introducción a JavaScript</a></p>
    <h3><a href="/2_conceptos/index.html">Conceptos básicos</a></h3>
    ${conceptosContenido()}
   </div>`)
}