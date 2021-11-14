/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import {
 d1eOperativosContenido
} from "./d1eOperativosContenido.js"

export function miNav() {
 return (/* html */
  `<ol>
    <li>
     <h1><a href="/1_fundamentos/index.html">Fundamentos</a></h1>
     <ol type="A" start="4">
      <li>
       <p>
        <a href="/1_fundamentos/d_operativo.html">Sistema operativo</a>
       </p>
      </li>
      <li>
       <section>
        <h1>
         <a href="/1_fundamentos/e_operativos/index.html">Ejemplos de sistemas operativos</a>
        </h1>
        ${d1eOperativosContenido()}
       </section>
      </li>
      <li>
       <p>
        <a href="/1_fundamentos/f_programas/index.html">Otros tipos de programas</a>
       </p>
      </li>
      </ol>
     </li>
    </ol>`)
}