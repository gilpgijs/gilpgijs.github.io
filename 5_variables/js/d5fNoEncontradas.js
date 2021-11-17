import "../../lib/muestra-codigo.js";

export function d5fNoEncontradas() {
 return (/* html */
  `<h1>E. Variables no encontradas</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Cuando tratas de usar una variable o una constante no definida, obtienes
       un mensaje de error y se aborta la ejecución del programa.
      </p>
     </li>
    </ul>
   </div>
   <section>
    <h1>Ejemplo</h1>
    <div class="horizontal">
     <muestra-codigo>
      <div>
       <div><span style="color: #0000ff;">let</span> <span
          style="color: #001080;">b</span> = <span
          style="color: #a31515;">"BB"</span></div>
       <div><span style="color: #001080;">console</span>.<span
          style="color: #795e26;">log</span>(<span style="color: #0070c1;">B</span>)
       </div>
      </div>
     </muestra-codigo>
     <section>
      <h1>Salida</h1>
      <p>
       <samp><span
         style="color: red;">ReferenceError: B is not defined</span></samp>
      </p>
     </section>
    </div>
    <div>
     <ul>
      <li>
       <p>
        <a href="https://gilpgnod.github.io/#let%20b%20%3D%20%22BB%22%0Aconsole.log(B)"
          target="_blank" rel="noopener">Ejecútalo en https://gilpgnod.github.io.</a>
       </p>
      </li>
     </ul>
    </div>
   </section>`)
}