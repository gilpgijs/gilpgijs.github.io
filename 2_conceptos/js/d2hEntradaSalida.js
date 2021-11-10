export function d2hEntradaSalida() {
 return (/* html */
  `<h1>
    H. <dfn>Entrada/salida</dfn>
   </h1>
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
       en la consola de la aplicación.
      </p>
     </li>
     <li>
      <p>Los textos de la instrucción se muestran separados por espacios.</p>
     </li>
     <li>
      <p>Los textos se muestran sin los símbolos que los delimitan.</p>
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