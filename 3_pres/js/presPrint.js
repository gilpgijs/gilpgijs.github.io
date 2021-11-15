import { d3_1 } from "./d3_1.js";
import { d3_2 } from "./d3_2.js";
import { d3_3 } from "./d3_3.js";
import { presIndex } from "./presIndex.js";

export function presPrint() {
 return (/* html */
  `<section>
    ${presIndex()}
   </section>
   <section>
    ${d3_1()}
   </section>
   <section>
    ${d3_2()}
   </section>
   <section>
    ${d3_3()}
   </section>`)
}