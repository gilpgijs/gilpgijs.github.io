import { SHADOW_HTML } from "./muestra-codigo_shadow.js";

class MuestraCódigo extends HTMLElement {
  constructor() {
    super();
    this.copia = this.copia.bind(this);
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = SHADOW_HTML;
    this.cod = shadowRoot.querySelector("#cod");
    /**@type {HTMLElement} */
    const nums = shadowRoot.querySelector("#nums");
    const total = parseInt(this.getAttribute("total"), 10);
    let inner = "";
    for (let i = 1; i <= total; i++) {
      inner += /* html */ `<div>${i}</div>`;
    }
    nums.innerHTML = inner;
    const button = shadowRoot.querySelector("button");
    button.addEventListener("click", this.copia);
  }
  copia() {
    var range = document.createRange();
    range.selectNode(this.cod);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado al portapapeles.");
  }
}
customElements.define("muestra-codigo", MuestraCódigo);