import { d5c1 } from "./d5c1.js"
import { d5c10Depura } from "./d5c10Depura.js"
import { d5c2 } from "./d5c2.js"
import { d5c3 } from "./d5c3.js"
import { d5c4 } from "./d5c4.js"
import { d5c5 } from "./d5c5.js"
import { d5c6 } from "./d5c6.js"
import { d5c7 } from "./d5c7.js"
import { d5c8 } from "./d5c8.js"
import { d5c9 } from "./d5c9.js"
import { d5cPresVarIndex } from "./d5cPresVarIndex.js"

export function d5cPresVarPrint() {
 return d5cPresVarIndex() + /* html */
  `<section>
    ${d5c1()}
   </section>
   <section>
    ${d5c2()}
   </section>
   <section>
    ${d5c3()}
   </section>
   <section>
    ${d5c4()}
   </section>
   <section>
    ${d5c5()}
   </section>
   <section>
    ${d5c6()}
   </section>
   <section>
    ${d5c7()}
   </section>
   <section>
    ${d5c8()}
   </section>
   <section>
    ${d5c9()}
   </section>
   <section>
    ${d5c10Depura()}
   </section>`
}