import { d4aDepuracion } from "./d4aDepuracion.js";
import { d4bPseudocodigo } from "./d4bPseudocodigo.js";
import { d4cDiagrama } from "./d4cDiagrama.js";
import { d4cResumen } from "./d4cResumen.js";

export function adicionalesPrint() {
 return (/* html */
  `<section>
    ${d4aDepuracion()}
   </section>
   <section>
    ${d4bPseudocodigo()}
   </section>
   <section>
    ${d4cDiagrama()}
   </section>
   <section>
    ${d4cResumen()}
   </section>`)
}