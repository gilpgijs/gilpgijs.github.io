import "../cmp/f-prompt.js";
import "../cmp/g-resumen-3.js";
import { d5cPresVarPrint } from "../c_pres_var/js/d5cPresVarPrint.js";
import { d5aIdentificador } from "./d5aIdentificador.js";
import { d5bVariable } from "./d5bVariable.js";
import { d5dConstante } from "./d5dConstante.js";
import { d5eDuplicadas } from "./d5eDuplicadas.js";
import "./d5fNoEncontradas.js";
import { d5fNoEncontradas } from "./d5fNoEncontradas.js";
import { variablesIndex } from "./variablesIndex.js";

export function variablesPrint() {
 return (/* html */
  `<section>
    ${variablesIndex()}
   </section>
   <section>
    ${d5aIdentificador()}
   </section>
   <section>
    ${d5bVariable()}
   </section>
   <section>
    ${d5cPresVarPrint()}
   </section>
   <section>
    ${d5dConstante()}
   </section>
   <section>
    ${d5eDuplicadas()}
   </section>
   <section>
    ${d5fNoEncontradas()}
   </section>
   <section>
    <f-prompt noprint></f-prompt>
   </section>
   <section>
    <g-resumen-3></g-resumen-3>
   </section>`)
}