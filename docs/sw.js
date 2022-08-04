/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.14"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono1024.png",
   "/img/icono/icono2048.png",
   "/img/icono/icono256.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon2730.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/img/m02Conceptos/winlogo.png",
   "/img/m04apoyo/Ejemplo.webp",
   "/img/m09if/if.svg",
   "/img/m10ifPrograma/Frutas.png",
   "/img/m11if-else/if-else.svg",
   "/img/m12if-elsePrograma/adivinanza.png",
   "/img/m13condMult/condicional-multiple.svg",
   "/img/m14condMultPrograma/recomienda.png",
   "/img/m15condMultElse/condicional-multiple-else.svg",
   "/img/m16condMultElsePrograma/recomienda2.png",
   "/img/m20do-while/do-while.svg",
   "/img/m21do-whilePrograma/valida.png",
   "/img/m22masNumeros/cuadratica.png",
   "/img/m22masNumeros/recta.png",
   "/img/m22masNumeros/recta.svg",
   "/img/m23while/while.svg",
   "/img/m24for/for.svg",
   "/img/m25switch/switch-default.svg",
   "/img/m25switch/switch.svg",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01Conceptos/",
   "/m01Conceptos/index.html",
   "/m01Conceptos/mAjs.html",
   "/m01Conceptos/mBstring.html",
   "/m01Conceptos/mCvacia.html",
   "/m01Conceptos/mDlog.html",
   "/m01Conceptos/mEorden.html",
   "/m01Conceptos/mFresumen.html",
   "/m01Conceptos/print.html",
   "/m02pres/",
   "/m02pres/index.html",
   "/m02pres/m1.html",
   "/m02pres/m2.html",
   "/m02pres/m3.html",
   "/m02pres/print.html",
   "/m03apoyo/",
   "/m03apoyo/index.html",
   "/m03apoyo/mAdepuracion.html",
   "/m03apoyo/mBpseudocodigo.html",
   "/m03apoyo/mCdiagramas.html",
   "/m03apoyo/mDpseint.html",
   "/m03apoyo/mEresumen.html",
   "/m03apoyo/print.html",
   "/m04variables/",
   "/m04variables/index.html",
   "/m04variables/mAidentificador.html",
   "/m04variables/mBvariable.html",
   "/m04variables/mCpresVar/",
   "/m04variables/mCpresVar/index.html",
   "/m04variables/mCpresVar/m1.html",
   "/m04variables/mCpresVar/m2.html",
   "/m04variables/mCpresVar/m3.html",
   "/m04variables/mCpresVar/m4.html",
   "/m04variables/mCpresVar/m5depura.html",
   "/m04variables/mCpresVar/print.html",
   "/m04variables/mDpres2Var/",
   "/m04variables/mDpres2Var/index.html",
   "/m04variables/mDpres2Var/m1.html",
   "/m04variables/mDpres2Var/m2.html",
   "/m04variables/mDpres2Var/m3.html",
   "/m04variables/mDpres2Var/m4.html",
   "/m04variables/mDpres2Var/m5.html",
   "/m04variables/mDpres2Var/m6.html",
   "/m04variables/mDpres2Var/m7.html",
   "/m04variables/mDpres2Var/m8.html",
   "/m04variables/mDpres2Var/m9depura.html",
   "/m04variables/mDpres2Var/print.html",
   "/m04variables/mEtextosYVariables.html",
   "/m04variables/mFconstante.html",
   "/m04variables/mGduplicadas.html",
   "/m04variables/mHnoEncontradas.html",
   "/m04variables/mIquestion.html",
   "/m04variables/mJproceso.html",
   "/m04variables/mKresumen.html",
   "/m04variables/print.html",
   "/m05comentarios/",
   "/m05comentarios/index.html",
   "/m05comentarios/mAcomentario.html",
   "/m05comentarios/mBcom1linea.html",
   "/m05comentarios/mCpresCom1linea/",
   "/m05comentarios/mCpresCom1linea/index.html",
   "/m05comentarios/mCpresCom1linea/m1.html",
   "/m05comentarios/mCpresCom1linea/m2.html",
   "/m05comentarios/mCpresCom1linea/m3depura.html",
   "/m05comentarios/mCpresCom1linea/print.html",
   "/m05comentarios/mDcom1oMas.html",
   "/m05comentarios/mEpresCom1oMas/",
   "/m05comentarios/mEpresCom1oMas/index.html",
   "/m05comentarios/mEpresCom1oMas/m1.html",
   "/m05comentarios/mEpresCom1oMas/m2.html",
   "/m05comentarios/mEpresCom1oMas/m3.html",
   "/m05comentarios/mEpresCom1oMas/m4depura.html",
   "/m05comentarios/mEpresCom1oMas/print.html",
   "/m05comentarios/mFJsDoc.html",
   "/m05comentarios/mGresumen.html",
   "/m05comentarios/print.html",
   "/m06bloques/",
   "/m06bloques/index.html",
   "/m06bloques/mAbloque.html",
   "/m06bloques/mBdepuraBloque.html",
   "/m06bloques/mCvariablesDuplicadas.html",
   "/m06bloques/mDresumen.html",
   "/m06bloques/print.html",
   "/m07textos/",
   "/m07textos/index.html",
   "/m07textos/mAigualdadTxt.html",
   "/m07textos/mBdiferenteTxt.html",
   "/m07textos/mCresumen.html",
   "/m07textos/print.html",
   "/m08if/",
   "/m08if/index.html",
   "/m08if/mAif.html",
   "/m08if/mBifTrue.html",
   "/m08if/mCifFalse.html",
   "/m08if/mDresumen.html",
   "/m08if/print.html",
   "/m09ifPrograma/",
   "/m09ifPrograma/index.html",
   "/m09ifPrograma/mAproblema.html",
   "/m09ifPrograma/mBescenarios.html",
   "/m09ifPrograma/mCpseudocodigo.html",
   "/m09ifPrograma/mDdiagrama.html",
   "/m09ifPrograma/mEcodigo.html",
   "/m09ifPrograma/print.html",
   "/m10if-else/",
   "/m10if-else/index.html",
   "/m10if-else/mAif-else.html",
   "/m10if-else/mBif-elseTrue.html",
   "/m10if-else/mCif-elseFalse.html",
   "/m10if-else/mDresumen.html",
   "/m10if-else/print.html",
   "/m11if-elsePrograma/",
   "/m11if-elsePrograma/index.html",
   "/m11if-elsePrograma/mAproblema.html",
   "/m11if-elsePrograma/mBescenarios.html",
   "/m11if-elsePrograma/mCpseudocodigo.html",
   "/m11if-elsePrograma/mDdiagrama.html",
   "/m11if-elsePrograma/mEcodigo.html",
   "/m11if-elsePrograma/print.html",
   "/m12condMult/",
   "/m12condMult/index.html",
   "/m12condMult/mAcondMult.html",
   "/m12condMult/mBcondMultTrue1.html",
   "/m12condMult/mCcondMultTrue2.html",
   "/m12condMult/mDcondMultFalse.html",
   "/m12condMult/mEresumen.html",
   "/m12condMult/print.html",
   "/m13condMultPrograma/",
   "/m13condMultPrograma/index.html",
   "/m13condMultPrograma/mAproblema.html",
   "/m13condMultPrograma/mBescenarios.html",
   "/m13condMultPrograma/mCpseudocodigo.html",
   "/m13condMultPrograma/mDdiagrama.html",
   "/m13condMultPrograma/mEcodigo.html",
   "/m13condMultPrograma/print.html",
   "/m14condMultElse/",
   "/m14condMultElse/index.html",
   "/m14condMultElse/mAcondMult.html",
   "/m14condMultElse/mBcondMultTrue1.html",
   "/m14condMultElse/mCcondMultTrue2.html",
   "/m14condMultElse/mDcondMultFalse.html",
   "/m14condMultElse/mEresumen.html",
   "/m14condMultElse/print.html",
   "/m15condMultElsePrograma/",
   "/m15condMultElsePrograma/index.html",
   "/m15condMultElsePrograma/mAproblema.html",
   "/m15condMultElsePrograma/mBescenarios.html",
   "/m15condMultElsePrograma/mCpseudocodigo.html",
   "/m15condMultElsePrograma/mDdiagrama.html",
   "/m15condMultElsePrograma/mEcodigo.html",
   "/m15condMultElsePrograma/print.html",
   "/m16textos/",
   "/m16textos/index.html",
   "/m16textos/mAnumber.html",
   "/m16textos/mBconcatenacion.html",
   "/m16textos/mCconcatAsig.html",
   "/m16textos/mDplantilla.html",
   "/m16textos/mEmenor.html",
   "/m16textos/mFmayor.html",
   "/m16textos/mGmenorIgual.html",
   "/m16textos/mHmayorIgual.html",
   "/m16textos/mIresumen.html",
   "/m16textos/print.html",
   "/m17logicos/",
   "/m17logicos/index.html",
   "/m17logicos/mAy.html",
   "/m17logicos/mBo.html",
   "/m17logicos/mCno.html",
   "/m17logicos/mDternario.html",
   "/m17logicos/mEresumen.html",
   "/m17logicos/print.html",
   "/m18do-while/",
   "/m18do-while/index.html",
   "/m18do-while/mAdo-while.html",
   "/m18do-while/mBdo-whileEj.html",
   "/m18do-while/mCresumen.html",
   "/m18do-while/print.html",
   "/m19do-whilePrograma/",
   "/m19do-whilePrograma/index.html",
   "/m19do-whilePrograma/mAproblema.html",
   "/m19do-whilePrograma/mBescenarios.html",
   "/m19do-whilePrograma/mCpseudocodigo.html",
   "/m19do-whilePrograma/mDdiagrama.html",
   "/m19do-whilePrograma/mEcodigo.html",
   "/m19do-whilePrograma/print.html",
   "/m20masNumeros/",
   "/m20masNumeros/index.html",
   "/m20masNumeros/mArecta.html",
   "/m20masNumeros/mBopsArit.html",
   "/m20masNumeros/mCopsAritAsig.html",
   "/m20masNumeros/mDIncrDecr.html",
   "/m20masNumeros/mEigualdad.html",
   "/m20masNumeros/mForden.html",
   "/m20masNumeros/mGordenIgual.html",
   "/m20masNumeros/mHprecedencia.html",
   "/m20masNumeros/mIexpresiones.html",
   "/m20masNumeros/mJresumen.html",
   "/m20masNumeros/print.html",
   "/m21while/",
   "/m21while/index.html",
   "/m21while/mAwhile.html",
   "/m21while/mBwhileAsc.html",
   "/m21while/mCwhileAsc2.html",
   "/m21while/mDwhileDesc.html",
   "/m21while/mEwhileDesc2.html",
   "/m21while/mFwhileNoEjec.html",
   "/m21while/mGwhileDescMal.html",
   "/m21while/mHwhileAscMal.html",
   "/m21while/mIresumen.html",
   "/m21while/print.html",
   "/m22for/",
   "/m22for/index.html",
   "/m22for/mAfor.html",
   "/m22for/mBforEj.html",
   "/m22for/mCresumen.html",
   "/m22for/print.html",
   "/m23switch/",
   "/m23switch/index.html",
   "/m23switch/mAswitch.html",
   "/m23switch/mBswitchEj.html",
   "/m23switch/mCswitchDefault.html",
   "/m23switch/mDswitchDefaultEj.html",
   "/m23switch/mEresumen.html",
   "/m23switch/print.html",
   "/print.html",
   "/site.webmanifest" ]

if (self instanceof ServiceWorkerGlobalScope) {
 self.addEventListener("install", installListener)
 self.addEventListener("fetch", fetchListener)
 self.addEventListener("activate", () => console.log("Service Worker activo."))
}

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}