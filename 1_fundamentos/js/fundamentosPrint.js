import {
 d1bDispositivosPrint
} from "../b_dispositivos/js/d1bDispositivosPrint.js"
import { d1aComputadoras } from "./d1aComputadoras.js"
import { d1cProgramas } from "./d1cProgramas.js"
import { d1dOperativos } from "./d1dOperativos.js"
import { d1eTiposProgramas } from "./d1eTiposProgramas.js"
import { d1fHardware } from "./d1fHardware.js"
import { d1gSoftware } from "./d1gSoftware.js"
import { d1hLenguaje } from "./d1hLenguaje.js"
import { d1iCompilador } from "./d1iCompilador.js"
import { d1jInterprete } from "./d1jInterprete.js"
import "./d1kResumen.js"
import { d1kResumen } from "./d1kResumen.js"
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
    ${d1cProgramas()}
   </section>
   <section>
    ${d1dOperativos()}
   </section>
   <section>
    ${d1eTiposProgramas()}
   </section>
   <section>
    ${d1fHardware()}
   </section>
   <section>
    ${d1gSoftware()}
   </section>
   <section>
    ${d1hLenguaje()}
   </section>
   <section>
    ${d1iCompilador()}
   </section>
   <section>
    ${d1jInterprete()}
   </section>
   <section>
    ${d1kResumen()}
   </section>`
}