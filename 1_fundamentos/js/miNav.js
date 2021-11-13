/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import {
 fundamentosContenido
} from "./fundamentosContenido.js"
export function miNav() {
 return (/* html */
  `<h1><a href="/1_fundamentos/index.html">1. Fundamentos</a></h1>
   ${fundamentosContenido()}
   <section>
    <h1>
     <a href="/2_conceptos/index.html">2. Conceptos básicos</a>
    </h1>
   </section>`)
}