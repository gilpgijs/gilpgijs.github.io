import "../../../lib/muestra-codigo.js";

export function d5cPresVarIndex() {
 return ( /* html */
  `<h1 class="presentación">C. Prueba de escritorio con variables</h1>
  <div class="horizontal">
  <muestra-codigo>
  <div>
   <div><span style="color: #0000ff;">let</span>&nbsp;<span
      style="color: #001080;">a</span>&nbsp;=&nbsp;<span
      style="color: #a31515;">"hola"</span></div>
   <div><span style="color: #0000ff;">let</span>&nbsp;<span
      style="color: #001080;">b</span>&nbsp;=&nbsp;<span
      style="color: #a31515;">"adios"</span></div>
   <div><span style="color: #001080;">console</span>.<span
      style="color: #795e26;">log</span>(<span
      style="color: #001080;">a</span>)</div>
   <div><span style="color: #001080;">console</span>.<span
      style="color: #795e26;">log</span>(<span
      style="color: #001080;">b</span>)</div>
   <div><span style="color: #001080;">console</span>.<span
      style="color: #795e26;">log</span>(<span
      style="color: #a31515;">"a"</span>)</div>
   <div><span style="color: #001080;">a</span>&nbsp;=&nbsp;<span
      style="color: #a31515;">"gg"</span></div>
   <div><span style="color: #001080;">console</span>.<span
      style="color: #795e26;">log</span>(<span
      style="color: #001080;">a</span>)</div>
   <div><span style="color: #001080;">b</span>&nbsp;=&nbsp;<span
      style="color: #001080;">a</span></div>
   <div><span style="color: #001080;">console</span>.<span
      style="color: #795e26;">log</span>(<span
      style="color: #001080;">b</span>)</div>
  </div>
 </muestra-codigo>
<section>
    <h1>Salida</h1>
    <pre><samp>hola
adios
a
gg
gg</samp></pre>
   </section>
  </div>`)
}