/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import {
 d1bDispositivosContenido
} from "./d1bDispositivosContenido.js"

export function miNav() {
 return (/* html */
  `<h1><a href="/1_fundamentos/index.html">1. Fundamentos</a></h1>
   <ol type="A">
    <li>
     <p>
      <a href="/1_fundamentos/a_computadora.html">Computadora electrónica</a>
     </p>
    </li>
    <li>
     <section>
      <h1>
       <a href="/1_fundamentos/b_dispositivos/index.html">Tipos de computadoras</a>
      </h1>
      ${d1bDispositivosContenido()}
     </section>
    </li>
    <li>
     <p>
      <a href="/1_fundamentos/c_programa.html">Programa</a>
     </p>
    </li>
   </ol>`)
}