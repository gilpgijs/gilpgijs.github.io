/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

 import { marcaActual } from "../lib/utilHtml.js";

customElements.define("mi-nav", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="0_sw.html">Software a Instalar</a></li>
        <li><a href="1_html.html">Introducción a HTML5</a></li>
        <li><a href="2_css3.html">Introducción a CSS3</a></li>
        <li><a href="3_cajas.html">Modelo de Cajas</a></li>
        <li><a href="4_intro_js.html">Introducción a JavaScript</a></li>
        <li><a href="5_tipos.html">Tipos de Datos</a></li>
        <li><a href="6_formularios.html">Formularios</a></li>
        <li><a href="7_condicionales.html">Condicionales</a></li>
        <li><a href="8_posicionamiento.html">Posicionamiento CSS3</a></li>
        <li><a href="9_ciclos.html">Ciclos</a></li>
        <li><a href="10_funciones.html">Funciones</a></li>
        <li><a href="11_objetos.html">Objetos</a></li>
        <li><a href="12_excepciones.html">Excepciones</a></li>
        <li><a href="13_sitio.html">Sitio Web</a></li>
        <li><a href="14_arreglos.html">Arreglos</a></li>
        <li><a href="15_promesas.html">Promesas</a></li>
        <li><a href="16_asociaciones.html">Asociaciones</a></li>
        <li><a href="17_datos.html">Bases de Datos</a></li>
        <li><a href="18_servicios.html">Servicios</a></li>
        <li><a href="19_polimorfismo.html">Polimorfismo</a></li>
      </ul>`;
    marcaActual(this, "base");
  }
});