import { Diapositiva } from "../../lib/Diapositiva.js";

export class DWrite extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
     D. La instrucción
     <strong>document.write</strong>
    </h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        La instrucción
        <dfn>
         <code class="language-javascript"><span
           style="color: #001080;">document</span>.<span
           style="color: #795e26;">write</span></code>
        </dfn>
        muestra un texto en una página web.
       </p>
      </li>
      <li>
       <p>Los textos se muestran sin los símbolos que los delimitan.</p>
      </li>
      <li>
       <p>
        Para un salto de línea usar el texto
        <code class="language-javascript">"&lt;br>"</code>.
       </p>
      </li>
     </ul>
     <h2>Ejemplos</h2>
     <table class="borde">
      <thead>
       <tr>
        <th>Instrucción</th>
        <th>Salida</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         <pre><code class="language-javascript"><span
           style="color: #001080;">document</span>.<span
           style="color: #795e26;">write</span>(<span
           style="color: #a31515;">"Hola pp"</span>);</code></pre>
        </td>
        <td>
         <pre><samp>Hola pp</samp></pre>
        </td>
       </tr>
       <tr>
        <td>
         <pre><code class="language-javascript"></code><span
           style="color: #001080;">document</span>.<span
           style="color: #795e26;">write</span>(<span
           style="color: #a31515;">"7!😁"</span>);</code></pre>
        </td>
        <td>
         <pre><samp>7!😁</samp></pre>
        </td>
       </tr>
      </tbody>
     </table>
    </div>`;
 }
}

customElements.define("d-write", DWrite);