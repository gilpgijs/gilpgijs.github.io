import "../../lib/muestra-codigo.js";

export function presIndex() {
 return (/* html */
  `<h1 class="leccion">3. Prueba de escritorio básica</h1>
   <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank" rel="noopener">Versión para Imprimir.</a>
    </p>
    <p>
     Una <dfn>prueba de escritorio</dfn> es la ejecucuión detallada y paso a
     paso de un programa.
    </p>
    <p>
     En esta lección se muestra la prueba de escritorio del siguiente programa.
    </p>
   </div>
   <div class="horizontal">
    <section>
     <h1>Salida</h1>
     <pre><samp>p
a
u</samp></pre>
    </section>
    <muestra-codigo>
     <div>
      <div><span style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span>(<span
         style="color: #a31515;">"p"</span>);&nbsp;<span
         style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span>(<span
         style="color: #a31515;">"a"</span>)</div>
      <div><span style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span>(<span
         style="color: #a31515;">"u"</span>)</div>
     </div>
    </muestra-codigo>
   </div>`)
}