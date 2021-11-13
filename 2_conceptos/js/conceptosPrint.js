import { conceptosIndex } from "./conceptosIndex.js";
import { d2aAlgoritmo } from "./d2aAlgoritmo.js";
import { d2bMemoria } from "./d2bMemoria.js";
import { d2cCPU } from "./d2cCPU.js";
import { d2dEntradaSalida } from "./d2dEntradaSalida.js";
import { d2ejs } from "./d2ejs.js";
import { d2fTextos } from "./d2fTextos.js";
import { d2gString } from "./d2gString.js";
import { d2hlog } from "./d2hlog.js";
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
    ${d2bMemoria()}
   </section>
   <section>
    ${d2cCPU()}
   </section>
   <section>
    ${d2dEntradaSalida()}
   </section>
   <section>
    ${d2ejs()}
   </section>
   <section>
    ${d2fTextos()}
   </section>
   <section>
    ${d2gString()}
   </section>
   <section>
    ${d2hlog()}
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