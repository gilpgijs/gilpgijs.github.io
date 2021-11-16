import "../../lib/muestra-codigo.js";

export function d5bVariable() {
 return (/* html */
  `<h1>B. <dfn>Variable</dfn></h1>
  <div class="lectura">
   <ul>
    <li>
     <p>
      Lugar en en la memoria de la computadora donde se almacena un dato que
      puede cambiar durante la ejecución de un programa.
     </p>
    </li>
   </ul>
   <h2>Declaración</h2>
   <p>
    Para usar una variable, primero hay que declararla con una instrucción como
    la siguiente:
   </p>
   <pre><code class="language-javascript"><span style="color: #0000ff;">let</span>&nbsp;<span style="color: #001080;">miNombre</span>&nbsp;=&nbsp;<span style="color: #a31515;">"pp"</span>;</code></pre>
   <ul>
    <li>
     <p>
      Se declaran con
      <code class="language-javascript" style="color: #0000ff;">let</code>
      o con
      <code class="language-javascript" style="color: #0000ff;">var</code>,
      aunque se recomienda usar
      <code class="language-javascript" style="color: #0000ff;">let</code>.
     </p>
    </li>
    <li>
     <p>
      Tienen asociado un
      <dfn>nombre</dfn>,
      con la estructura de un identificador y normalmente empieza con minúscula.
      En este caso, la variable se llama
      <code><span style="color: #001080;">miNombre</span></code>.
     </p>
    </li>
    <li>
     <p>
      Tienen asociado un <dfn>valor</dfn>, que es un dato, el cual puede
      cambiar durante la ejecución del programa. En este caso el valor es
      <code><span style="color: #a31515;">"pp"</span></code>.
     </p>
    </li>
    <li>
     <p>
      El
      <dfn>
       operador de asignación
       (<code class="language-javascript" style="color: #0000ff;">=</code>)
      </dfn>
      sirve para cambiar el valor de una variable, perdiendo el valor anterior.
      El operando del lado izquierdo siempre debe ser una variable.
     </p>
    </li>
    <li>
     <p>
      Cuando el nombre de una variable no aparece a la izquierda del operador de
      asignación, se usa su valor.
     </p>
    </li>
   </ul>
  </div>
  <section>
   <h1>Ejemplo</h1>
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
   </div>
  </section>`)
}