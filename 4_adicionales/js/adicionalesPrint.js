import { d4aDepuracion } from "./d4aDepuracion.js";
import { d4bPseudocodigo } from "./d4bPseudocodigo.js";
import { d4cDiagrama } from "./d4cDiagrama.js";
import { d4dPSeInt } from "./d4dPSeInt.js";
import { d4eResumen } from "./d4eResumen.js";

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
    ${d4dPSeInt()}
   </section>
   <section>
    ${d4eResumen()}
   </section>`)
}