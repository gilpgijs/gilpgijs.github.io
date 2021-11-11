/**
 * Asigna el título de la página usando el valor de h1.
 * @param {string} app nombre de la app.
 */
export function setTitle(app) {
 let h1 = document.querySelector("h1")
 if (h1) {
  document.title = `${h1.textContent} - ${app}`
 }
}

/**
 * Registra el service worker con la url de parámetro.
 * @param {string} url del service worker.
 */
export function registraServiceWorker(url) {
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register(url).
   then(registro => {
    console.log("Service Worker registrado.")
    console.log(registro)
   }).
   catch(muestraError)
 }
}

/**
 * Muestra una excepción en la consola y despliega un cuadro de alerta con el
 * valor de la propiedad message de la excepción.
 * @param {Error} e excepción que se muestra.
 */
function muestraError(e) {
 console.error(e)
 alert(e.message)
}
