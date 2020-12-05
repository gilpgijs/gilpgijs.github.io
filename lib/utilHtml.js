/**
 * @param {HTMLElement} element
 * @param {string} atributo
 */
export function marcaActual(element, atributo) {
  const base = element.getAttribute(atributo);
  if (base) {
    const anclas = Array.from(element.querySelectorAll("a"));
    for (const a of anclas) {
      if (a.href.indexOf(base) > 0) {
        a.classList.add("actual");
      }
    }
  }
}