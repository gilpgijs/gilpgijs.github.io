import { d1f1Juegos } from "./d1f1Juegos.js"
import { d1f2Asistentes } from "./d1f2Asistentes.js"
import { d1f3Oficina } from "./d1f3Oficina.js"
import { d1f4Sitios } from "./d1f4Sitios.js"
import { d1f5Videoconferencia } from "./d1f5Videoconferencia.js"
import { d1fProgramasIndex } from "./d1fProgramasIndex.js"

export function d1fProgramasPrint() {
 return d1fProgramasIndex() + /* html */
  `<section>
   ${d1f1Juegos()}
  </section>
 <section>
   ${d1f2Asistentes()}
  </section>
 <section>
   ${d1f3Oficina()}
  </section>
 <section>
   ${d1f4Sitios()}
  </section>
  <section>
   ${d1f5Videoconferencia()}
  </section>`
}