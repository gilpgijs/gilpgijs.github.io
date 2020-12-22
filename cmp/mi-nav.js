/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><a href="/index.html">Inicio</a></li>
        <li><a href="/2_sw.html">Software a Instalar</a></li>
        <li><a href="/3_html/">Introducción a HTML5</a></li>
        <li><a href="/4_css/">Introducción a CSS3</a></li>
        <li><a href="/5_js/">Introducción a JavaScript</a></li>
        <li><a href="/6_adivinanza/">Adivinanza</a></li>
        <li><a href="/7_encuesta/">Encuesta</a></li>
        <li><a href="/8_formularios/">Formulario</a></li>
        <li><a href="/9_mueve/">Mueve Figura</a></li>
        <li><a href="/10_plurales/">Plurales</a></li>
        <li><a href="/11_recomendaciones/">Recomendaciones</a></li>
        <li><a href="/12_switch/">Recomendaciones con Switch</a></li>
        <li><a href="/13_complejas/">Recomendaciones más Complejas</a></li>
        <li><a href="/14_complejas_switch/">Recomendaciones más Complejas con Switch</a></li>
        <li><a href="/15_recta/">Dibuja una Recta</a></li>
        <li><a href="/16_ondulando/">Ondulando</a></li>
        <li><a href="/17_valida/">Valida Datos</a></li>
        <li><a href="/18_contadores/">Contadores</a></li>
        <li><a href="/19_acumuladores/">Acumuladores</a></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);