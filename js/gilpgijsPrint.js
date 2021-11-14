import "../10_textos/cmp/textos-print.js"
import "../11_logicos/cmp/logicos-print.js"
import "../12_do_while/cmp/do-while-print.js"
import "../13_numeros/cmp/numeros-print.js"
import "../14_mas_numeros/cmp/mas-numeros-print.js"
import "../15_while/cmp/while-print.js"
import "../16_for/cmp/for-print.js"
import "../17_switch/cmp/switch-print.js"
import { fundamentosPrint } from "../1_fundamentos/js/fundamentosPrint.js"
import { conceptosPrint } from "../2_conceptos/js/conceptosPrint.js"
import "../3_variables/cmp/variables-print.js"
import "../4_comentarios/cmp/comentarios-print.js"
import "../5_bloques/cmp/bloques-print.js"
import "../6_if/cmp/if-print.js"
import "../7_if_else/cmp/if-else-print.js"
import "../8_multiple/cmp/multiple-print.js"
import "../9_melse/cmp/multiple-else-print.js"
import { miFooter } from "../lib/miFooter.js"
import { gilpgijsIndex } from "./gilpgijsIndex.js"
import { miNav } from "./miNav.js"

export function gilpgijsPrint() {
 document.body.innerHTML += gilpgijsIndex(miNav()) +
  miFooter() + /* html */
  `<section>
    ${fundamentosPrint()}
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">2. Conceptos básicos</h1>
    ${conceptosPrint()}
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">3. Variables</h1>
    <variables-print></variables-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">4. Comentarios</h1>
    <comentarios-print></comentarios-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">5. Bloques</h1>
    <bloques-print></bloques-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">6. La estructura de control <strong>if</strong></h1>
    <if-print></if-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">
     7. La estructura de control <strong>if-else</strong>
    </h1>
    <if-else-print></if-else-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">8. Condicional múltiple</h1>
    <if-print></if-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">9. Condicional múltiple con <strong>else</strong></h1>
    <multiple-else-print></multiple-else-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">10. Más textos</h1>
    <textos-print></textos-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">11. Operadores lógicos</h1>
    <logicos-print></logicos-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">12. La estructura de control <strong>do-while</strong></h1>
    <do-while-print></do-while-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">13. Números</h1>
    <numeros-print></numeros-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">14. Más números</h1>
    <mas-numeros-print></mas-numeros-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">15. La estructura de control <strong>while</strong></h1>
    <while-print></while-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">16. La estructura de control <strong>for</strong></h1>
    <for-print></for-print>
    ${miFooter()}
   </section>
   <section>
    <h1 class="presentación">17. La estructura de control <strong>switch</strong></h1>
    <switch-print></switch-print>
    ${miFooter()}
   </section>`
 }
