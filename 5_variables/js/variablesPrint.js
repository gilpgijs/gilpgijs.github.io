import "../cmp/a-identificadores.js";
import { d5cPresVarPrint } from "../c_pres_var/js/d5cPresVarPrint.js";
import "../cmp/b-variables.js";
import "../cmp/c-constantes.js";
import "../cmp/d-duplicadas.js";
import "../cmp/e-no-encontradas.js";
import "../cmp/f-prompt.js";
import "../cmp/g-resumen-3.js";
import { variablesIndex } from "./variablesIndex.js";

export function variablesPrint() {
 return (/* html */
  `<section>
    ${variablesIndex()}
   </section>
   <section>
    <a-identificadores></a-identificadores>
   </section>
   <section>
    <b-variables></b-variables>
   </section>
   <section>
    ${d5cPresVarPrint()}
   </section>
   <section>
    <c-constantes></c-constantes>
   </section>
   <section>
    <d-duplicadas></d-duplicadas>
   </section>
   <section>
    <e-no-encontradas></e-no-encontradas>
   </section>
   <section>
    <f-prompt noprint></f-prompt>
   </section>
   <section>
    <g-resumen-3></g-resumen-3>
   </section>`)
}