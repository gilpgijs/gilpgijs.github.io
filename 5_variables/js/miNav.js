/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { variablesContenido } from "./variablesContenido.js";

export function miNav() {
 return (/* html */
  `<ol start="4">
    <li>
     <section>
      <h1><a href="/4_adicionales/index.html">Herramientas adicionales</a></h1>
     </section>
     <ol type="A" start="5">
      <li>
       <p><a href="/4_adicionales/e_resumen.html">Resumen</a></p>
      </li>
     </ol>
    </li>
    <li>
     <h1><a href="/5_variables/index.html">Variables</a></h1>
     ${variablesContenido()}
     </li>
     <li>
      <section>
       <h1><a href="/6_comentarios/index.html">Comentarios</a></h1>
      </section>
     </li>
    </ol>`)
}