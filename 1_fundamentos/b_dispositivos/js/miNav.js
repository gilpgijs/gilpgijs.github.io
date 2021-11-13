/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import {
 d1bDispositivosContenido
} from "./d1bDispositivosContenido.js"
export function miNav() {
 return (/* html */
  `<h1><a href="/1_fundamentos/index.html">Fundamentos</a></h1>
   <p>
    <a href="/1_fundamentos/a_computadora.html" class="leccionAnterior"
      title="Computadora electrónica">▲</a>
   </p>
   <section>
    <h1>
     <a href="/1_fundamentos/b_dispositivos/index.html">B. Tipos de
      computadoras</a>
    </h1>
    ${d1bDispositivosContenido()}
    <p>
     <a href="/1_fundamentos/c_programa.html" class="leccionSiguiente"
       title="Programa">▼</a>
    </p>
   </section>`)
}