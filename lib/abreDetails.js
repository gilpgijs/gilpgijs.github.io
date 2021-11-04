/**
 * @param {Element|null} element
 */
export function abreDetails(element) {
 if (element) {
  /** @type {HTMLDetailsElement[]} */
  const details = Array.from(element.querySelectorAll("details"))
  for (const detail of details) {
   detail.open = true;
  }
 }
}