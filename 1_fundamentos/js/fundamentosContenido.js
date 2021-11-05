import {
 d1bDispositivosContenido
} from "../b_dispositivos/js/d1bDispositivosContenido.js"

export function fundamentosContenido() {
 return (/* html */
  `<ol type="A">
    <li>
     <p><a href="/1_fundamentos/a_computadoras.html">Computadoras</a></p>
    </li>
    <li>
     <details>
      <summary>
       <h5>
        <a href="/1_fundamentos/b_dispositivos/index.html">Tipos de computadoras</a>
       </h5>
      </summary>
      ${d1bDispositivosContenido()}
     </details>
    </li>
    <li>
     <p><a href="/1_fundamentos/c_programas.html">Programas</a></p>
    </li>
    <li>
     <p>
      <a href="/1_fundamentos/d_tipos_programas.html">Tipos de programas</a>
     </p>
    </li>
    <li>
     <p><a href="/1_fundamentos/e_hardware.html">Hardware</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/f_software.html">Software</a></p>
    </li>
    <li>
     <p>
      <a href="/1_fundamentos/g_lenguaje.html">Lenguaje de programación</a>
     </p>
    </li>
    <li>
     <p><a href="/1_fundamentos/h_compilador.html">Compilador</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/i_interprete.html">Intérprete</a></p>
    </li>
    <li>
     <p><a href="/1_fundamentos/j_resumen.html">Resumen</a></p>
    </li>
   </ol>`)
}