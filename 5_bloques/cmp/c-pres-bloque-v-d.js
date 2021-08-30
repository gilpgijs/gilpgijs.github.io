import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CPresBloqueVD extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Depura bloques con variables duplicadas</h1>
   <div class="lectura">
    <p>
     Las variables declaradas con
     <code class="language-javascript">const</code>
     o con
     <code class="language-javascript">let</code>
     dentro de un bloque ocultan a otras con el mismo nombre que estén
     declaradas fuera del bloque.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="src/2_dup_blk.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="src/2_dup_blk.html">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cmeta%20name%3D%22viewport%22%0A%20%20content%3D%22width%3Ddevice-width%22%3E%0A%3Cscript%3E%0A%20debugger%3B%0A%20const%20x%20%3D%20%22p%22%3B%0A%20document.write(x)%3B%0A%20%7B%0A%20%20let%20x%20%3D%20%22gg%22%3B%0A%20%20document.write(x)%3B%0A%20%7D%0A%20document.write(x)%3B%0A%3C%2Fscript%3E">
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
         style="color: #0070c1;">x</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"p"</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">x</span>);</div>
      <div>&nbsp;{</div>
      <div>&nbsp;&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
         style="color: #001080;">x</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"gg"</span>;</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #001080;">x</span>);</div>
      <div>&nbsp;}</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">x</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c-pres-bloque-v-d", CPresBloqueVD);