import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BTxtIgualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Operador de igualdad de textos</h1>
   <div class="lectura">
    <dl>
     <dt><dfn><code class="language-javascript">a === b</code></dfn></dt>
     <dt><dfn>Igual que</dfn></dt>
     <dd>
      <p>
       Devuelve
       <code class="language-javascript">true</code>
       si los dos operandos representan el mismo texto, considerando
       mayúsculas y minúsculas; en otro caso, devuelve
       <code class="language-javascript">false</code>.
      </p>
     </dd>
    </dl>
    <h2>Ejemplo</h2>
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
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"h"</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"gh"</span>);<span
        style="color: #008000;">//F</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"h"</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"H"</span>);&nbsp;<span
        style="color: #008000;">//F</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"h"</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"h"</span>);&nbsp;<span
        style="color: #008000;">//T</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("b-txt-igualdad", BTxtIgualdad);