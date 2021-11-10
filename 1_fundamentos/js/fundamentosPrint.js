import {
 d1bDispositivosPrint
} from "../b_dispositivos/js/d1bDispositivosPrint.js"
import { d1eOperativosPrint } from "../e_operativos/js/d1eOperativosPrint.js"
import { d1fProgramasPrint } from "../f_programas/js/d1fProgramasPrint.js"
import { d1aComputadora } from "./d1aComputadora.js"
import { d1cPrograma } from "./d1cPrograma.js"
import { d1dOperativo } from "./d1dOperativo.js"
import { d1gHardware } from "./d1gHardware.js"
import { d1hSoftware } from "./d1hSoftware.js"
import { d1iLenguaje } from "./d1iLenguaje.js"
import { d1jCompilador } from "./d1jCompilador.js"
import { d1kInterprete } from "./d1kInterprete.js"
import { d1lResumen } from "./d1lResumen.js"
import { fundamentosIndex } from "./fundamentosIndex.js"

export function fundamentosPrint() {
 return fundamentosIndex() + /* html */
  `<section>
    ${d1aComputadora()}
   </section>
   <section>
    ${d1bDispositivosPrint()}
   </section>
   <section>
    ${d1cPrograma()}
   </section>
   <section>
    ${d1dOperativo()}
   </section>
   <section>
    ${d1eOperativosPrint()}
   </section>
   <section>
    ${d1fProgramasPrint()}
   </section>
   <section>
    ${d1gHardware()}
   </section>
   <section>
    ${d1hSoftware()}
   </section>
   <section>
    ${d1iLenguaje()}
   </section>
   <section>
    ${d1jCompilador()}
   </section>
   <section>
    ${d1kInterprete()}
   </section>
   <section>
    ${d1lResumen()}
   </section>`
}