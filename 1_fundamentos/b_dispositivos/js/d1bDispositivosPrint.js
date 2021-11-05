import { d1b1Wearables } from "./d1b1Wearables.js"
import { d1b2Assistants } from "./d1b2Assistants.js"
import { d1b3Arduino } from "./d1b3Arduino.js"
import { d1b4Consolas } from "./d1b4Consolas.js"
import { d1b5Celulares } from "./d1b5Celulares.js"
import { d1b6Tablets } from "./d1b6Tablets.js"
import { d1b7Laptops } from "./d1b7Laptops.js"
import { d1b8Desktops } from "./d1b8Desktops.js"
import { d1b9Servidores } from "./d1b9Servidores.js"
import { d1bDispositivosIndex } from "./d1bDispositivosIndex.js"

export function d1bDispositivosPrint() {
 return d1bDispositivosIndex() + /* html */
  `<section>
   ${d1b1Wearables()}
  </section>
 <section>
   ${d1b2Assistants()}
  </section>
 <section>
   ${d1b3Arduino()}
  </section>
 <section>
   ${d1b4Consolas()}
  </section>
  <section>
   ${d1b5Celulares()}
  </section>
  <section>
   ${d1b6Tablets()}
  </section>
  <section>
   ${d1b7Laptops()}
  </section>
  <section>
   ${d1b8Desktops()}
  </section>
  <section>
   ${d1b9Servidores()}
  </section>`
}