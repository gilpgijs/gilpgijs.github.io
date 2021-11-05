import {
 d1bDispositivosPrint
} from "../b_dispositivos/js/d1bDispositivosPrint.js"
import "../cmp/d1c-programas.js"
import "../cmp/d1d-tipos-programas.js"
import "../cmp/d1e-hardware.js"
import "../cmp/d1f-software.js"
import "../cmp/d1g-lenguaje.js"
import "../cmp/d1h-compilador.js"
import "../cmp/d1i-interprete.js"
import "../cmp/d1j-resumen.js"
import { d1aComputadoras } from "./d1aComputadoras.js"
import { fundamentosIndex } from "./fundamentosIndex.js"

export function fundamentosPrint() {
 return fundamentosIndex() + /* html */
  `<section>
    ${d1aComputadoras()}
   </section>
   <section>
    ${d1bDispositivosPrint()}
   </section>
   <section>
    <d1c-programas></d1c-programas>
   </section>
   <section>
    <d1d-tipos-programas></d1d-tipos-programas>
   </section>
   <section>
    <d1e-hardware></d1e-hardware>
   </section>
   <section>
    <d1f-software></d1f-software>
   </section>
   <section>
    <d1g-lenguaje></d1g-lenguaje>
   </section>
   <section>
    <d1h-compilador></d1h-compilador>
   </section>
   <section>
    <d1i-interprete></d1i-interprete>
   </section>
   <section>
    <d1j-resumen></d1j-resumen>
   </section>`
}