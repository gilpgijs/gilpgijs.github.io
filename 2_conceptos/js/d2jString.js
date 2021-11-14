export function d2jString() {
 return (/* html */
  `<h1>J. El tipo <code>string</code></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Al tipo de datos que representa texto se le llama
       <dfn><code class="language-javascript">string</code></dfn>,
       que es la traducción al inglés del término
       <q>cadena</q>.
      </p>
     </li>
     <li>
      <p>
       En JavaScript los textos se representan con secuencias de caracteres
       delimitadas por los siguientes símbolos:
      </p>
      <dl>
       <dt><code class="language-javascript">' '</code></dt>
       <dd>
        <p>
         El delimitador es el símbolo
         <dfn>apóstrofo</dfn>
         (<code class="language-javascript">'</code>).
        </p>
        <p>
         En su interior puedes poner cualquier caracter, excepto apóstrofo y
         salto de línea.
        </p>
       </dd>
       <dt><code class="language-javascript">" "</code></dt>
       <dd>
        <p>
         El delimitador es el símbolo
         <dfn>comillas</dfn>
         (<code class="language-javascript">"</code>).
        </p>
        <p>
         En su interior puedes poner cualquier caracter, excepto comillas y
         salto de línea.
        </p>
       </dd>
      </dl>
     </li>
     <li>
      <p>
       La
       <dfn>codificación</dfn>
       de un texto es asignar a cada caracter del texto una combinación
       de varios 1 y 0. La combinación se puede expresar como un número.
      </p>
     </li>
     <li>
      <p>
       JavaScript usa la codificación UTF-16 de <dfn>Unicode</dfn>, que está
       definida en
       <a href="https://unicode.org" target="_blank"
         rel="noopener">https://unicode.org</a>.
      </p>
     </li>
     <li>
      <p>
       Para agregar un emoji desde Windows solo tienes que presionar la tecla
       con el logotipo de Windows al mismo tiempo que el punto
       (<kbd>
       <img style="vertical-align: middle;" src="/2_conceptos/img/winlogo.png"
         alt="Logotipo de Windows">+.
        </kbd>)
       y aparece un cuadro de diálogo que te permite seleccionar un emoji.
      </p>
     </li>
    </ul>
    <section>
     <h1>Ejemplos</h1>
     <ul>
      <li>
       <p><code class="language-javascript">"Hola pp"</code></p>
      </li>
      <li>
       <p>
        <code
          class="language-javascript">'😁¡¡¡¡A sus órdenes jefecita!!!!'</code>
       </p>
      </li>
     </ul>
    </section>
    <section>
     <h1>Cadena Vacía</h1>
     <p>
      Hay una cadena sin caracteres:
      <code class="language-javascript">""</code>
      o
      <code class="language-javascript">''</code>
      conocida como
      <dfn>cadena vacía</dfn>.
     </p>
    </section>
   </div>`)
}