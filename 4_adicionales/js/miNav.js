/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { adicionalesContenido } from "./adicionalesContenido.js"

export function miNav() {
 return (/* html */
  `<ol start="3">
    <li>
     <section>
      <h1><a href="/3_pres/index.html">Prueba de escritorio básica</a></h1>
     </section>
     <ol start="3">
      <li>
       <p><a href="/3_pres/3.html"><code class="language-javascript">console.log("u")</code></a></p>
      </li>
     </ol>
    </li>
    <li>
     <h1><a href="/4_adicionales/index.html">Herramientas de apoyo</a></h1>
     ${adicionalesContenido()}
     </li>
     <li>
      <section>
       <h1><a href="/5_variables/index.html">Variables</a></h1>
      </section>
     </li>
    </ol>`)
}