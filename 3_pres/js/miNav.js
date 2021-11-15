/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import { presContenido } from "./presContenido.js"

export function miNav() {
 return (/* html */
  `<ol start="2">
    <li>
     <section>
      <h1><a href="/2_conceptos/index.html">Conceptos básicos</a></h1>
     </section>
     <ol type="A" start="13">
      <li>
       <p><a href="/2_conceptos/m_resumen.html">Resumen</a></p>
      </li>
     </ol>
    </li>
    <li>
     <h1><a href="/3_pres/index.html">Prueba de escritorio básica</a></h1>
     ${presContenido()}
    </li>
    <li>
     <section>
      <h1><a href="/4_adicionales/index.html">Herramientas adicionales</a></h1>
     </section>
    </li>
   </ol>`)
}