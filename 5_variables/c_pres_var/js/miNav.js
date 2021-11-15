/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { d5cPresVarContenido } from "./d5cPresVarContenido.js"

export function miNav() {
 return (/* html */
  `<ol start="5">
    <li>
     <h1><a href="/5_variables/index.html">Variables</a></h1>
     <ol type="A" start="2">
      <li>
       <p>
        <a href="/5_variables/b_variable.html">Variable</a>
       </p>
      </li>
      <li>
       <section>
        <h1>
         <a href="/5_variables/c_pres_var/index.html">Prueba de escritorio con variables</a>
        </h1>
        ${d5cPresVarContenido()}
       </section>
      </li>
      <li>
       <p>
        <a href="/5_variables/d_constantes.html">Constantes</a>
       </p>
      </li>
     </ol>
    </li>
   </ol>`)
}