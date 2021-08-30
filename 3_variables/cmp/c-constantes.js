import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CConstantes extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Constantes</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Una
       <dfn>constante</dfn>
       es similar a una variable, pero su valor no puede cambiar una vez asignado.
      </p>
     </li>
     <li>
      <p>
       Normalmente el nombre se escribe en mayúsculas, usando guión bajo
       (<code class="language-javascript">_</code>)
       para separar palabras.
      </p>
     </li>
     <li>
       <p>
       Se declaran con
       <code class="language-javascript">const</code>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <pre><samp>3.14
PI_REDONDEADO</samp></pre>
     <h3>Consola</h3>
     <pre><samp><span style="color: red;">Uncaught TypeError: Assignment to constant variable.</span></samp></pre>
     <p class="noPrint">
      <a target="_blank" href="src/2_constantes.html">Ábrelo en otra pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cmeta%20name%3D%22viewport%22%0A%20%20content%3D%22width%3Ddevice-width%22%3E%0A%3Cscript%3E%0A%20debugger%3B%0A%20const%20PI_REDONDEADO%20%3D%203.14%3B%0A%20document.write(PI_REDONDEADO)%3B%0A%20document.write(%22PI_REDONDEADO%22)%3B%0A%20PI_REDONDEADO%20%3D%209%3B%0A%20document.write(PI_REDONDEADO)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;meta</span>&nbsp;<span
         style="color: #ff0000;">name</span>=<span
         style="color: #0000ff;">"viewport"</span></div>
      <div>&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
         style="color: #0000ff;">"width=device-width"</span><span
         style="color: #800000;">&gt;</span></div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">PI_REDONDEADO</span>&nbsp;=&nbsp;<span
         style="color: #098658;">3.14</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">PI_REDONDEADO</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"PI_REDONDEADO"</span>);</div>
      <div>&nbsp;<span
         style="color: #0070c1;">PI_REDONDEADO</span>&nbsp;=&nbsp;<span
         style="color: #098658;">9</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">PI_REDONDEADO</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c-constantes", CConstantes);