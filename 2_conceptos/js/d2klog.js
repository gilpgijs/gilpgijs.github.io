export function d2klog() {
 return (/* html */
  `<h1>K. La función <strong>console.log</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La instrucción
       <dfn>
        <code class="language-javascript"><span
          style="color: #001080;">console</span>.<span
          style="color: #795e26;">log</span></code>
       </dfn>
       muestra textos separados por coma
       (<code class="language-javascript">,</code>)
       en el dispositivo de salida de la aplicación.
      </p>
     </li>
     <li>
      <p>
       Los textos de la instrucción se muestran sin los símbolos que los
       delimitan y separados por espacios.</p>
     </li>
     <li>
      <p>
       A cada instrucción
       <code class="language-javascript"><span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span></code>
       le corresponde un renglón diferente.
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
          style="color: #001080;">console</span>.<span
          style="color: #795e26;">log</span>(<span
          style="color: #a31515;">"Hola pp"</span>);</code></pre>
       </td>
       <td>
        <pre><samp>Hola pp</samp></pre>
       </td>
      </tr>
      <tr>
       <td>
        <pre><code class="language-javascript"></code><span
          style="color: #001080;">console</span>.<span
          style="color: #795e26;">log</span>(<span
          style="color: #a31515;">"ggg"</span>, <span
          style="color: #a31515;">"7!😁"</span>);</code></pre>
       </td>
       <td>
        <pre><samp>ggg 7!😁</samp></pre>
       </td>
      </tr>
     </tbody>
    </table>
   </div>`)
}