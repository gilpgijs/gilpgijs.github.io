/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><p><a href="/index.html">Inicio</a></p></li>
        <li><p><a href="/2_sw.html">Software a Instalar</a></p></li>
        <li><p><a href="/3_html/">Introducción a HTML5</a></p></li>
        <li><p><a href="/4_css/">Introducción a CSS3</a></p></li>
        <li><p><a href="/5_js/">Introducción a JavaScript</a></p></li>
        <li><p><a href="/6_variables/">Variables</a></p></li>
        <li><p><a href="/7_chismes/">Chismes</a></p></li>
        <li><p><a href="/8_textos/">Textos</a></p></li>
        <li><p><a href="/9_numeros/">Números</a></p></li>
        <li><p><a href="/10_animaciones/">Animaciones con Emojis</a></p></li>
        <li><p><a href="/11_mueve_botones/">Mueve Emojis con Botones</a></p></li>
        <li><p><a href="/12_choques/">Detecta Choques</a></p></li>
        <li><p><a href="/13_sonrie/">Haz Algo cuando Choques</a></p></li>
        <li><p><a href="/14_mueve_aleatorio/">Que se Mueva como Quiera</a></p></li>
        <li><p><a href="/15_recomendaciones/">Recomendaciones</a></p></li>
        <li><p><a href="/16_switch/">La estructura switch</a></p></li>
        <li><p><a href="/17_recta/">Dibuja una Recta</a></p></li>
        <li><p><a href="/18_girando/">Dibuja Girando</a></p></li>
        <li><p><a href="/19_elige_giros/">Elige Cantidad de Giros</a></p></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);