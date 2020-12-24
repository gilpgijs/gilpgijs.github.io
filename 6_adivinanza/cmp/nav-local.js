/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Adivinanza</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_problema.html">Definición del Problema</a></p></li>
        <li><p><a href="4_diseno.html">Diseño</a></p></li>
        <li><p><a href="5_codigo.html">Código</a></p></li>
        <li><p><a href="6_identificadores.html">Identificadores</a></p></li>
        <li><p><a href="7_variables.html">Variables</a></p></li>
        <li><p><a href="8_constantes.html">Constantes</a></p></li>
        <li><p><a href="9_duplicadas.html">Variables Duplicadas</a></p></li>
        <li><p><a href="10_jsdoc.html">JsDoc</a></p></li>
        <li><p><a href="11_funciones.html">Funciones</a></p></li>
        <li><p><a href="12_tamanos.html">Tamaños y Distancias en CSS</a></p></li>
        <li><p><a href="13_max-height.html">La propiedad <strong>max-height</strong></a></p></li>
        <li><p><a href="14_script.html">El Elemento <strong>script</strong></a></p></li>
        <li><p><a href="15_img.html">El Elemento <strong>img</strong></a></p></li>
        <li><p><a href="16_figure.html">El Elemento <strong>figure</strong></a></p></li>
        <li><p><a href="17_form.html">El Elemento <strong>form</strong></a></p></li>
        <li><p><a href="18_button.html">El Elemento <strong>button</strong></a></p></li>
        <li><p><a href="19_output.html">El Elemento <strong>output</strong></a></p></li>
        <li><p><a href="20_ejecutar.html">Crear, Ejecutar y Depurar</a></p></li>
        <li><p><a href="21_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});