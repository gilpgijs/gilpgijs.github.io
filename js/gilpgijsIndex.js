import { INSTRUCCIONES_NAV } from "../lib/INSTRUCCIONES_NAV.js"

/**
 * @param {string} miNav
 */
export function gilpgijsIndex(miNav) {
 return (/* html */
  `<h1 class="sitio">Introducción a JavaScript</h1>
    <div class="lectura">
     <p class="autor">por Gilberto Pacheco Gallegos</p>
     <p class="noPrint">
      <a href="print.html" target="_blank">Versión para Imprimir.</a>
     </p>
     <ul>
      <li>
       <p>Este sitio presenta contenido introductorio sobre JavaScript</p>
      </li>
      <li>
       <p>
        Una vez concluidos estos temas, puedes continuar con
        <a href="https://gilpgpoojs.github.io" rel="noopener"
          target="_blank">https://gilpgpoojs.github.io</a>
        para aprender sobre programación orientada a objetos en JavaScript.
       </p>
      </li>
      <li>
       <p>
        Los temas de HTML, CSS y animaciones se han movido al sitio
        <a href="https://gilpgiw.github.io" rel="noopener"
          target="_blank">https://gilpgiw.github.io</a>.
       </p>
      </li>
     </ul>
     ${INSTRUCCIONES_NAV}
     <nav>
      ${miNav}
     </nav>
    </div>`)
}