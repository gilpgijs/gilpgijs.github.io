/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { d1fProgramasContenido } from "./d1fProgramasContenido.js"

export function miNav() {
 return (/* html */
  `<h1><a href="/1_fundamentos/index.html">1. Fundamentos</a></h1>
   <p>
    <a href="/1_fundamentos/e_operativos/5_linux.html">E. Ejemplos de sistemas operativos/Linux</a>
   </p>
   <section>
    <h1>
     <a href="/1_fundamentos/f_programas/index.html">F. Otros tipos de programas</a>
    </h1>
    ${d1fProgramasContenido()}
    <p>
     <a href="/1_fundamentos/g_hardware.html">G. Hardware</a>
    </p>
   </section>`)
}