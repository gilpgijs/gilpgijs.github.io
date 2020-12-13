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
    /** @type {HTMLSlotElement} */
    this.mislot = shadowRoot.querySelector("slot");
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
  async copia() {
    try {
      const código =
        this.mislot.
          assignedElements().
          map(e => Array.from(e.children).map(ch => ch.textContent).join("\n")).
          join("");
      if (código) {
        await navigator.clipboard.writeText(código);
        alert("Texto copiado al portapapeles.");
      }
    } catch (e) {
      alert(e.message);
    }
  }
}
customElements.define("muestra-codigo", MuestraCódigo);