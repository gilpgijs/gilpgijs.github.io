/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { CtrlDiapositiva } from "../lib/CtrlDiapositiva.js";

customElements.define("ctrl-diapositiva", class extends CtrlDiapositiva {
  get lista() {
    return (/* html */
      `<ol>
        <li><p><a href="index.html">Inicio</a></p></li>
        <li><p><a href="sintaxis.html">Sintaxis</a></p></li>
        <li><p><a href="ejemplo.html">Ejemplo</a></p></li>
      </ol>`);
  }
});