const LOCAL_STORAGE_MENU = "menu"
const MENU = "menu"
const XMENU = "xmenu"

/**@type {string} */
let urlAnterior = ""
/**@type {string} */
let urlSiguiente = ""
/**@type {number|null} */
let iniciaX = null
/**@type {number|null} */
let iniciaY = null

/**
 * @param {string} miNav
 * @param {string} contenido
 * @param {string} footer
 */
export function layoutCajon(miNav, contenido, footer) {
 document.body.innerHTML += /* html */
  `<div id=principal>
    <div class="controles">
     <button id="abre" type="button" title="Menú" class="cambiaMenú">
      &#x2630;
     </button>
     <a class="anterior bye" title="Página anterior">◀</a>
     <a class="siguiente bye" title="Página siguiente">▶</a>
    </div>
    ${contenido}
    ${footer}
  </div>
  <div id="cierra" class="cambiaMenú"></div>
  <nav id="nav">
   <header>
    <button type="button" title="Cierra" class="cambiaMenú">
     &#x2715;
    </button>
    <h2>Contenido</h2>
   </header>
   ${miNav}
  </nav>`
 document.body.classList.add(XMENU)
 document.addEventListener("keydown", teclas)
 document.addEventListener("touchstart", iniciaTouch)
 document.addEventListener("touchmove", desplazaTouch)
 const nav = document.querySelector("#nav")
 const abre = document.querySelector("#abre")
 /** @type {HTMLAnchorElement[]} */
 const anteriores = Array.from(document.querySelectorAll(".anterior"))
 /** @type {HTMLAnchorElement[]} */
 const siguientes = Array.from(document.querySelectorAll(".siguiente"))
 if (abre) {
  abre.addEventListener("click", cambiaMenu)
 }
 const cambian = Array.from(document.querySelectorAll(".cambiaMenú"))
 for (const c of cambian) {
  c.addEventListener("click", cambiaMenu)
 }
 const menu = localStorage.getItem(LOCAL_STORAGE_MENU)
 if (menu) {
  if (menu === MENU) {
   document.body.classList.remove(XMENU)
   document.body.classList.add(MENU)
  } else {
   document.body.classList.remove(MENU)
   document.body.classList.add(XMENU)
  }
 }
 const href = location.href
 // window.addEventListener("load", () => {
 if (nav) {
  const anclas = Array.from(nav.querySelectorAll("a"))
  for (let i = 0, len = anclas.length; i < len; i++) {
   const ancla = anclas[i]
   if (href === ancla.href || href + "index.html" === ancla.href
    || href.startsWith(ancla.href)) {
    ancla.classList.add("actual")
    if (i === 0) {
     urlAnterior = ""
    } else {
     urlAnterior = anclas[i - 1].href
     for (const anterior of anteriores) {
      anterior.href = urlAnterior
      anterior.classList.remove("bye")
     }
    }
    if (i >= len - 1) {
     urlSiguiente = ""
    } else {
     urlSiguiente = anclas[i + 1].href
     for (const siguiente of siguientes) {
      siguiente.href = urlSiguiente
      siguiente.classList.remove("bye")
     }
    }
    for (let details = ancla.closest("details")
     ; details
     ; details = details.parentElement ?
      details.parentElement.closest("details") : null) {
     details.open = true
     const summary = details.querySelector("summary")
     if (summary) {
      summary.classList.add("actual")
     }
    }
   }
  }
 }
 // })
}
function cambiaMenu() {
 document.body.classList.toggle(XMENU)
 document.body.classList.toggle(MENU)
 if (document.body.classList.contains(MENU)) {
  localStorage.setItem(LOCAL_STORAGE_MENU, MENU)
 } else {
  localStorage.setItem(LOCAL_STORAGE_MENU, XMENU)
 }
}
/** @param {KeyboardEvent} ev*/
function teclas(ev) {
 switch (ev.key) {
  case "ArrowLeft":
   retrocede()
   break
  case "ArrowRight":
   avanza()
   break
 }
}
function retrocede() {
 if (urlAnterior) {
  location.href = urlAnterior
 }
}
function avanza() {
 if (urlSiguiente) {
  location.href = urlSiguiente
 }
}
/** @param {TouchEvent} ev*/
function iniciaTouch(ev) {
 const toqueInicial = ev.touches[0]
 iniciaX = toqueInicial.clientX
 iniciaY = toqueInicial.clientY
}
/** @param {TouchEvent} ev*/
function desplazaTouch(ev) {
 if (iniciaX && iniciaY) {
  const desplazamiento = ev.touches[0]
  var desplazamientoX = desplazamiento.clientX
  var desplazamientoY = desplazamiento.clientY
  var difX = desplazamientoX - iniciaX
  var difY = desplazamientoY - iniciaY
  // Checa que el movimiento no sea muy corto.
  if (Math.abs(difX) + Math.abs(difY) > 90) {
   if (Math.abs(difX) > Math.abs(difY)) {
    if (difX > 70) {
     retrocede()
    } else {
     avanza()
    }
    // Reinicia valores.
    iniciaX = null
    iniciaY = null
   }
  }
 }
}