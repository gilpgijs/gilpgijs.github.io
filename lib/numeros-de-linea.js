class NúmerosDeLínea extends HTMLElement {
  connectedCallback() {
    const total = parseInt(this.getAttribute("total"), 10);
    let inner = "";
    for (let i = 1; i <= total; i++) {
      inner += /* html */ `<div>${i}</div>`;
    }
    this.innerHTML = inner;
  }
}
customElements.define("numeros-de-linea", NúmerosDeLínea);