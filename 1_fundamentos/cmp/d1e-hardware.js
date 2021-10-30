import { Diapositiva } from "../../lib/Diapositiva.js";

export class D1eHardware extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Hardware</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Según la <em>Real Academia Española</em>,
        <dfn>hardware</dfn>
        es un
        <q>conjunto de aparatos de una computadora</q>.
       </p>
      </li>
      <li>
       <p>
        Según el <em>Diccionario Oxford</em>,
        <dfn>hardware</dfn>
        es un
        <q>conjunto de elementos físicos o materiales que constituyen una
         computadora o un sistema informático.</q>.
       </p>
      </li>
      <li>
       <p>
        Las <dfn>arquitecturas de hardware</dfn> son diseños de hardware con sus propias
        reglas de funcionamiento y que son incompatibles con otras arquitecturas.
       </p>
      <li>
       <p>Algunas arquiteturas de software son:</p>
       <ul>
        <li><p>x86 (Intel y AMD, para computadoras personales y Servidores)</p></li>
        <li><p>ARM (dispositivos móviles y computadoras personales Apple)</p></li>
       </ul>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d1e-hardware", D1eHardware);