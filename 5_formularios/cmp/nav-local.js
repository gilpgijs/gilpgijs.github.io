/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Tipos de Datos</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_analisis.html">Ejemplo de Análisis</a></p></li>
        <li><p><a href="4_ejemplo.html">Ejemplo de Formulario</a></p></li>
        <li><p><a href="5_funciones.html">Funciones</a></p></li>
        <li><p><a href="6_script.html">El Elemento <strong>script</strong></a></p></li>
        <li><p><a href="7_form.html">El Elemento <strong>form</strong></a></p></li>
        <li><p><a href="8_input.html">El Elemento <strong>input</strong></a></p></li>
        <li><p><a href="9_label.html">El Elemento <strong>label</strong></a></p></li>
        <li><p><a href="10_button.html">El Elemento <strong>button</strong></a></p></li>
        <li><p><a href="11_output.html">El Elemento <strong>output</strong></a></p></li>
        <li><p><a href="12_ejecutar.html">Crear, Ejecutar y Depurar</a></p></li>
        <li><p><a href="13_2_botones.html">Formulario con 2 Botones</a></p></li>
        <li><p><a href="14_juego.html">Juego con Botones</a></p></li>
        <li><p><a href="15_encuesta.html">Encuesta</a></p></li>
      </ol>`;
  }
});