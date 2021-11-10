import { conceptosIndex } from "./conceptosIndex.js";
import { d2aAlgoritmo } from "./d2aAlgoritmo.js";
import { d2bjs } from "./d2bjs.js";
import { d2cTextos } from "./d2cTextos.js";
import { d2dString } from "./d2dString.js";
import { d2elog } from "./d2elog.js";
import { d2fCPU } from "./d2fCPU.js";
import { d2gMemoria } from "./d2gMemoria.js";
import { d2hEntradaSalida } from "./d2hEntradaSalida.js";
import { d2iOrden } from "./d2iOrden.js";
import { d2jPseudocodigo } from "./d2jPseudocodigo.js";
import { d2kDiagrama } from "./d2kDiagrama.js";
import { d2lResumen } from "./d2lResumen.js";

export function conceptosPrint() {
 return (/* html */
  `<section>
    ${conceptosIndex()}
   </section>
   <section>
    ${d2aAlgoritmo()}
   </section>
   <section>
    ${d2bjs()}
   </section>
   <section>
    ${d2cTextos()}
   </section>
   <section>
    ${d2dString()}
   </section>
   <section>
    ${d2elog()}
   </section>
   <section>
    ${d2fCPU()}
   </section>
   <section>
    ${d2gMemoria()}
   </section>
   <section>
    ${d2hEntradaSalida()}
   </section>
   <section>
    ${d2iOrden()}
   </section>
   <section>
    ${d2jPseudocodigo()}
   </section>
   <section>
    ${d2kDiagrama()}
   </section>
   <section>
    ${d2lResumen()}
   </section>`)
}