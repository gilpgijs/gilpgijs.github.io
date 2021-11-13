/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import {
 d1eOperativosContenido
} from "./d1eOperativosContenido.js"

export function miNav() {
 return (/* html */
  `<h1><a href="/1_fundamentos/index.html">1. Fundamentos</a></h1>
   <p>
    <a href="/1_fundamentos/d_operativo.html" class="leccionAnterior"
      title="D. Sistema operativo">▲</a>
   </p>
   <section>
    <h1>
     <a href="/1_fundamentos/e_operativos/index.html">E. Ejemplos de sistemas operativos</a>
    </h1>
    ${d1eOperativosContenido()}
    <p>
     <a href="/1_fundamentos/f_programas/index.html" class="leccionSiguiente"
       title="Otros tipos de programas">▼</a>
    </p>
   </section>`)
}