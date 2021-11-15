export function d5c6() {
 return (/* html */
  `<h1>6. <code><span style="color: #001080;">a</span>&nbsp;=&nbsp;<span
  style="color: #a31515;">"gg"</span></code>
</h1>
<div class="pres">
<section id="código">
<h2>Código</h2>
<pre><code><span class="numero-1">1</span><span style="color: #0000ff;">let</span>&nbsp;<span
    style="color: #001080;">a</span>&nbsp;=&nbsp;<span
    style="color: #a31515;">"hola"</span>;
<span class="numero-1">2</span><span style="color: #0000ff;">let</span>&nbsp;<span
    style="color: #001080;">b</span>&nbsp;=&nbsp;<span
    style="color: #a31515;">"adios"</span>;
<span class="numero-1">3</span><span style="color: #001080;">console</span>.<span
    style="color: #795e26;">log</span>(<span
    style="color: #001080;">a</span>);
<span class="numero-1">4</span><span style="color: #001080;">console</span>.<span
    style="color: #795e26;">log</span>(<span
    style="color: #001080;">b</span>);
<span class="numero-1">5</span><span style="color: #001080;">console</span>.<span
    style="color: #795e26;">log</span>(<span
    style="color: #a31515;">"a"</span>);
<span class="activo">6</span><span style="color: #001080;">a</span>&nbsp;=&nbsp;<span
    style="color: #a31515;">"gg"</span>;
&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
    style="color: #795e26;">log</span>(<span
    style="color: #001080;">a</span>);
&nbsp;&nbsp;<span style="color: #001080;">b</span>&nbsp;=&nbsp;<span
    style="color: #001080;">a</span>;
&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
    style="color: #795e26;">log</span>(<span
    style="color: #001080;">b</span>);</code></pre>
</section>
<section id="variables">
<h2>Variables</h2>
<table class="frame">
 <tr>
  <th><span class="numero-1">1</span>a</th>
  <td><span class="numero-1">1</span><span
     style="color: #a31515;"><del>"hola"</del></span>
   <br>
   <span class="activo">6</span><span
     style="color: #a31515;">"gg"</span>
  </td>
 </tr>
 <tr>
  <th><span class="numero-1">2</span>b</th>
  <td><span class="numero-1">2</span><span
     style="color: #a31515;">"adios"</span></td>
 </tr>
</table>
</section>
<section id="expresiones">
<h2>Expresiones</h2>
<section style="display:block">
 <span class="numero-1">3</span>
 <code class="language-javascript"><span
      style="color: #001080;">a &rarr; </span><span
      style="color: #a31515;">"hola"</span></code>
</section>
<section style="display:block">
 <span class="numero-1">4</span>
 <code class="language-javascript"><span
      style="color: #001080;">b &rarr; </span><span
      style="color: #a31515;">"adios"</span></code>
</section>
</section>
<section id="consola">
<h2>Consola</h2>
<pre><samp><span class="numero-1">3</span>hola
<span class="numero-1">4</span>adios
<span class="numero-1">5</span>a</samp></pre>
</section>
<section id="explicación">
<h2>Explicación</h2>
<ul>
<li>
<p>
 Asigna a la variable <var>a</var> el nuevo valor
 <code
   class="language-javascript"><span style="color: #a31515;">"gg"</span></code>.
 El valor anterior se descarta.
</p>
</li>
</ul>
</section>
</div>`)
}