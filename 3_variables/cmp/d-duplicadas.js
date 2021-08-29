import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DDuplicadas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Variables Duplicadas</h1>
   <div class="lectura">
    <p>
     Las variables o constantes declaradas en el mismo espacio no pueden
     tener el mismo nombre.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Consola</h3>
     <pre><samp><span style="color: red;">Uncaught SyntaxError: Identifier 'a' has already been declared</span></samp></pre>
     <p class="noPrint">
      <a target="_blank" href="src/3_duplicados.html">Ábrelo en otra pestaña.</a>
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
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">a</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"Q1"</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>);</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"Q2"</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   </div>`;
 }
}

customElements.define("d-duplicadas", DDuplicadas);