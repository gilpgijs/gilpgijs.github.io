import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class PresWhileDescMal extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   G. Prueba de escritorio con <strong>while</strong> descendente mal diseñado
  </h1>
  <muestra-codigo>
   <div>
    <div><span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
    <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
       style="color: #001080;">i</span>&nbsp;=&nbsp;<span
       style="color: #098658;">1</span>;</div>
    <div>&nbsp;<span style="color: #af00db;">while</span>&nbsp;(<span
       style="color: #001080;">i</span>&nbsp;&lt;=&nbsp;<span
       style="color: #098658;">3</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #001080;">i</span>);</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">i</span>--;</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"Adios."</span>);</div>
    <div><span style="color: #800000;">&lt;/script&gt;</span></div>
   </div>
  </muestra-codigo>
  <div class="lectura noPrint">
   <p class="noPrint">
    <a target="_blank" href="src/6_while_desc_mal.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20i%20%3D%201%3B%0A%20while%20(i%20%3C%3D%203)%20%7B%0A%20%20document.write(i)%3B%0A%20%20i--%3B%0A%20%7D%0A%20document.write(%22Adios.%22)%3B%0A%3C%2Fscript%3E">
     Revísalo en gilpgedit.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("g-15-pres-while-desc-mal", PresWhileDescMal);