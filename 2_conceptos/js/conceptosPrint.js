import "../cmp/a-js.js";
import "../cmp/c-string.js";
import "../cmp/d-write.js";
import "../cmp/e-orden.js";
import "../cmp/f-resumen-2.js";
import "../cmp/b-textos.js";
import { conceptosIndex } from "./conceptosIndex.js";

export function conceptosPrint() {
 return (/* html */
  `<section>
    ${conceptosIndex()}
   </section>
   <section>
    <a-js></a-js>
   </section>
   <section>
    <b-textos></b-textos>
   </section>
   <section>
    <c-string></c-string>
   </section>
   <section>
    <d-write></d-write>
   </section>
   <section>
    <e-orden></e-orden>
   </section>
   <section>
    <f-resumen-2></f-resumen-2>
   </section>`)
}