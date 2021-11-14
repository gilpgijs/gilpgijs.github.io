/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { d1fProgramasContenido } from "./d1fProgramasContenido.js"

export function miNav() {
 return (/* html */
  `<ol>
    <li>
     <h1><a href="/1_fundamentos/index.html">Fundamentos</a></h1>
     <ol type="A" start="5">
      <li>
       <p>
        <a href="/1_fundamentos/e_operativos/5_linux.html">Ejemplos de sistemas operativos</a>
       </p>
       <ul>
        <li>
         <p>
          <a href="/1_fundamentos/e_operativos/5_linux.html">Linux</a>
         </p>
        </li>
       </ul>
      </li>
      <li>
       <section>
        <h1>
         <a href="/1_fundamentos/f_programas/index.html">Otros tipos de programas</a>
        </h1>
        ${d1fProgramasContenido()}
       </section>
      </li>
      <li>
       <p>
        <a href="/1_fundamentos/g_hardware.html">Hardware</a>
       </p>
      </li>
     </ol>
    </li>
   </ol>`)
}