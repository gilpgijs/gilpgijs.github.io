import "../cmp/d1b2-celulares.js"
import "../cmp/d1b3-tablets.js"
import "../cmp/d1b4-laptops.js"
import "../cmp/d1b5-desktops.js"
import "../cmp/d1b6-servidores.js"
import "../cmp/d1b1-consolas.js"
import { d1bDispositivosIndex } from "./d1bDispositivosIndex.js"

export function d1bDispositivosPrint() {
 return d1bDispositivosIndex() + /* html */
  `<section>
    <d1b1-consolas></d1b1-consolas>
   </section>
   <section>
    <d1b2-celulares></d1b2-celulares>
   </section>
   <section>
    <d1b3-tablets></d1b3-tablets>
   </section>
   <section>
    <d1b4-laptops></d1b4-laptops>
   </section>
   <section>
    <d1b5-desktops></d1b5-desktops>
   </section>
   <section>
    <d1b6-servidores></d1b6-servidores>
   </section>`
}