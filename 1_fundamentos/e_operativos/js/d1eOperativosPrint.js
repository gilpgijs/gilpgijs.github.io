import { d1e1Android } from "./d1e1Android.js"
import { d1e2Windows } from "./d1e2Windows.js"
import { d1e3Ios } from "./d1e3Ios.js"
import { d1e4Macos } from "./d1e4Macos.js"
import { d1e5Linux } from "./d1e5Linux.js"
import { d1eOperativosIndex } from "./d1eOperativosIndex.js"

export function d1eOperativosPrint() {
 return d1eOperativosIndex() + /* html */
  `<section>
   ${d1e1Android()}
  </section>
 <section>
   ${d1e2Windows()}
  </section>
 <section>
   ${d1e3Ios()}
  </section>
 <section>
   ${d1e4Macos()}
  </section>
  <section>
   ${d1e5Linux()}
  </section>`
}