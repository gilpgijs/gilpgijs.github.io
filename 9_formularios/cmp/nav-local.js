/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Formularios</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_problema.html">Definición del Problema</a></p></li>
        <li><p><a href="4_diseno.html">Diseño</a></p></li>
        <li><p><a href="5_codigo.html">Código</a></p></li>
        <li><p><a href="6_form.html">El Elemento <strong>form</strong></a></p></li>
        <li><p><a href="7_input.html">El Elemento <strong>input</strong></a></p></li>
        <li><p><a href="8_label.html">El Elemento <strong>label</strong></a></p></li>
        <li><p><a href="9_button.html">El Elemento <strong>button</strong></a></p></li>
        <li><p><a href="10_ejecutar.html">Crear, Ejecutar y Depurar</a></p></li>
        <li><p><a href="11_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});