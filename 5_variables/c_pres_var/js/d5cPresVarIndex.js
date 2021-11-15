import "../../../lib/muestra-codigo.js";

export function d5cPresVarIndex() {
 return ( /* html */
  `<h1 class="presentación">5. Prueba de escritorio con variables</h1>
  <div class="horizontal">
|  <section>
    <h1>Salida</h1>
    <pre><samp>hola
adios
a
gg
gg</samp></pre>
   </section>
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
  </div>
  <div class="lectura noPrint">
   <p>
    <a href="https://pythontutor.com/javascript.html#code=let%20a%20%3D%20%22hola%22%0Alet%20b%20%3D%20%22adios%22%0Aconsole.log%28a%29%0Aconsole.log%28b%29%0Aconsole.log%28%22a%22%29%0Aa%20%3D%20%22gg%22%0Aconsole.log%28a%29%0Ab%20%3D%20a%0Aconsole.log%28b%29&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D"
      target=_blank>Depura el código en Python Tutor.</a>
   </p>
  </div>`)
}