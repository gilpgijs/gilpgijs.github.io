import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DJsDoc extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. JSDoc</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>comentarios de documentación</dfn>
       o
       <dfn>JSDoc</dfn>,
       son comentarios de una o más líneas que empiezan con
       <code class="language-javascript" style="color: #008000;">/**</code>
       y explican la definición de un elemento del código.
      </p>
     </li>
     <li>
      <p>
       Se colocan en la línea inmediatamente antes del texto que
       explican.
      </p>
     </li>
     <li>
      <p>
       Algunas herramientas, como <em>Visual Studio Code</em>, pueden usar
       estos
       comentarios para detectar errores en el código.
      </p>
     </li>
     <li>
      <p>El contendo de este tipo de comentarios debe seguir las reglas de:</p>
      <ul>
       <li>
        <p><a href="https://jsdoc.app/" target="_blank">JSDoc</a>.</p>
       </li>
       <li>
        <p>
         <a
           href="https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html"
           target="_blank">Proyectos de JavaScript usando TypeScript</a>.
        </p>
       </li>
       <li>
        <p>
         <a
           href="https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html"
           target="_blank">revisión de TypeScript para archivos
          JavaScript</a>.
        </p>
       </li>
       <li>
        <p>
         <a
           href="https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"
           target="_blank">referencia de JSDoc</a>.
        </p>
       </li>
      </ul>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #008000;">/**</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;*&nbsp;Número&nbsp;de&nbsp;veces&nbsp;que&nbsp;aparece</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;*&nbsp;la&nbsp;palabra&nbsp;sapo.</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;*&nbsp;@type&nbsp;{number}</span></div>
     <div><span style="color: #008000;">&nbsp;&nbsp;*/</span></div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">sapos</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("d-jsdoc", DJsDoc);