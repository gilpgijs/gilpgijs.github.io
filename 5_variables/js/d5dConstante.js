import "../../lib/muestra-codigo.js";

export function d5dConstante() {
 return (/* html */
  `<h1>C. <dfn>Constante</dfn></h1>
  <div class="lectura">
   <ul>
    <li>
     <p>
      Es similar a una variable, pero su valor no puede cambiar una vez
      asignado.
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
  </div>
  <section>
   <h1>Ejemplo</h1>
   <div class="horizontal">
   <muestra-codigo>
   <div>
    <div><span style="color: #0000ff;">const</span> <span
       style="color: #0070c1;">PI_REDONDEADO</span> = <span
       style="color: #098658;">3.14</span></div>
    <div><span style="color: #001080;">console</span>.<span
       style="color: #795e26;">log</span>(<span
       style="color: #0070c1;">PI_REDONDEADO</span>)</div>
    <div><span style="color: #001080;">console</span>.<span
       style="color: #795e26;">log</span>(<span
       style="color: #a31515;">"PI_REDONDEADO"</span>)</div>
    <div><span style="color: #0070c1;">PI_REDONDEADO</span> = <span
       style="color: #098658;">9</span></div>
    <div><span style="color: #001080;">console</span>.<span
       style="color: #795e26;">log</span>(<span
       style="color: #0070c1;">PI_REDONDEADO</span>);</div>
   </div>
  </muestra-codigo>
  <section>
     <h1>Salida</h1>
     <pre><samp>3.14
PI_REDONDEADO</samp></pre>
     <p>
      <samp><span
        style="color: red;">TypeError: Assignment to constant variable.</span></samp>
     </p>
    </section>
   </div>
   <div class="lectura noPrint">
    <ul>
     <li>
      <p>
       <a href="https://pythontutor.com/javascript.html#code=const%20PI_REDONDEADO%20%3D%203.14%0Aconsole.log%28PI_REDONDEADO%29%0Aconsole.log%28%22PI_REDONDEADO%22%29%0API_REDONDEADO%20%3D%209%0Aconsole.log%28PI_REDONDEADO%29&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D"
         target="_blank" rel="noopener">Revísalo en JavaScript Tutor.</a>
      </p>
     </li>
    </ul>
   </div>
  </section>`)
}