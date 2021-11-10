import {
 d1bDispositivosContenido
} from "../b_dispositivos/js/d1bDispositivosContenido.js"
import {
 d1eOperativosContenido
} from "../e_operativos/js/d1eOperativosContenido.js"
import {
 d1fProgramasContenido
} from "../f_programas/js/d1fProgramasContenido.js"

export function fundamentosContenido() {
 return (/* html */
  `<ol type="A">
    <li>
     <p>
      <a href="/1_fundamentos/a_computadora.html">Computadora Electrónica</a>
     </p>
    </li>
    <li>
     <details>
      <summary>
       <h5>
        <a href="/1_fundamentos/b_dispositivos/index.html">Tipos de
         computadoras</a>
       </h5>
      </summary>
      ${d1bDispositivosContenido()}
     </details>
    </li>
    <li>
     <p><a href="/1_fundamentos/c_programa.html">Programa</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/d_operativo.html">Sistema operativo</a></p>
    </li>
    <li>
     <details>
      <summary>
       <h5>
        <a href="/1_fundamentos/e_operativos/index.html">Ejemplos de sistemas
        operativos</a>
       </h5>
      </summary>
      ${d1eOperativosContenido()}
     </details>
    </li>
    <li>
     <details>
      <summary>
       <h5>
        <a href="/1_fundamentos/f_programas/index.html">Otros tipos de
         programas</a>
       </h5>
      </summary>
      ${d1fProgramasContenido()}
     </details>
    </li>
    <li>
     <p><a href="/1_fundamentos/g_hardware.html">Hardware</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/h_software.html">Software</a></p>
    </li>
    <li>
     <p>
      <a href="/1_fundamentos/i_lenguaje.html">Lenguaje de programación</a>
     </p>
    </li>
    <li>
     <p><a href="/1_fundamentos/j_compilador.html">Compilador</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/k_interprete.html">Intérprete</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/l_resumen.html">Resumen</a></p>
    </li>
   </ol>`)
}