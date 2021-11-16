import "../../lib/muestra-codigo.js";

export function d2lOrden() {
 return (/* html */
  `<h1>L. Orden de ejecución</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       En cada renglón, las instrucciones se ejecutan de izquierda a derecha.
      </p>
     </li>
     <li>
      <p>Los renglones de instrucciones se ejecutan de arriba para abajo.</p>
     </li>
     <li>
      <p>
       Opcionalmente se puede poner el símbolo punto y coma
       (<code class="language-javascript">;</code>)
       al final de una expresión; pero cuando se ponen 2 o más expresones en
       un mismo renglón, este símbolo es obligatorio para separarlas.</p>
     </li>
    </ul>
   </div>
   <section>
    <h1>Ejemplo</h1>
    <div class="horizontal">
     <muestra-codigo>
      <div>
       <div><span style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span>(<span
         style="color: #a31515;">"p"</span>); <span
         style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span>(<span
         style="color: #a31515;">"a"</span>)</div>
       <div><span style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span>(<span
         style="color: #a31515;">"u"</span>)</div>
      </div>
     </muestra-codigo>
     <section>
      <h1>Salida.</h1>
      <pre><samp>p
a
u</samp></pre>
     </section>
    </div>
    <div class="lectura">
     <ul>
      <li>
       <p>
        En la próxima lección se explica con más detalle como funciona este
        código fuente.
       </p>
      </li>
     </ul>
    </div>
   </section>`)
}