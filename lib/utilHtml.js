/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

/** 
 * @param {HTMLElement} element
 */
export function marcaActual(element) {
  if (element.hasAttribute("marca")) {
    const href = location.href;
    const anclas = Array.from(element.querySelectorAll("a"));
    for (const a of anclas) {
      if (href.startsWith(a.href)) {
        a.classList.add("actual");
      }
    }
  }
}