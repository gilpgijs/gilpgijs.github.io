import { conceptosIndex } from "./conceptosIndex.js";
import { d2aAlgoritmo } from "./d2aAlgoritmo.js";
import { d2bMotherboard } from "./d2bMotherboard.js";
import { d2cMemoria } from "./d2cMemoria.js";
import { d2dCPU } from "./d2dCPU.js";
import { d2eEntrada } from "./d2eEntrada.js";
import { d2fSalida } from "./d2fSalida.js";
import { d2gEntradaSalida } from "./d2gEntradaSalida.js";
import { d2hjs } from "./d2hjs.js";
import { d2iTextos } from "./d2iTextos.js";
import { d2jString } from "./d2jString.js";
import { d2klog } from "./d2klog.js";
import { d2lOrden } from "./d2lOrden.js";
import { d2mResumen } from "./d2mResumen.js";

export function conceptosPrint() {
 return (/* html */
  `<section>
    ${conceptosIndex()}
   </section>
   <section>
    ${d2aAlgoritmo()}
   </section>
   <section>
    ${d2bMotherboard()}
   </section>
   <section>
    ${d2cMemoria()}
   </section>
   <section>
    ${d2dCPU()}
   </section>
   <section>
    ${d2eEntrada()}
   </section>
   <section>
    ${d2fSalida()}
   </section>
   <section>
    ${d2gEntradaSalida()}
   </section>
   <section>
    ${d2hjs()}
   </section>
   <section>
    ${d2iTextos()}
   </section>
   <section>
    ${d2jString()}
   </section>
   <section>
    ${d2klog()}
   </section>
   <section>
    ${d2lOrden()}
   </section>
   <section>
    ${d2mResumen()}
   </section>`)
}