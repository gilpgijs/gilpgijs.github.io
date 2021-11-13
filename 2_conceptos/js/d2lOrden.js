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
       Una <dfn>prueba de escritorio</dfn> es la ejecución detallada y
       paso a paso de un programa.
      </p>
     </li>
     <li>
      <p>
       <dfn>Depurar</dfn> es controlar la realización de una prueba de
       escritorio usando una herramienta de desarrollo.
      </p>
     </li>
     <li>
      <p>
       Usaremos la herramienta
       <a target="_blank" rel="noopener"
         href="https://gilpgedit.github.io/">https://gilpgedit.github.io/</a>
       y los navegadores web para depurar los programas.
      </p>
     </li>
    </ul>
   </div>
   <section>
    <h1>Ejemplo</h1>
    <div class="horizontal">
     <section>
      <h1>Salida.</h1>
      <pre><samp>p
a
u</samp></pre>
     </section>
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