/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.2"

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
   "/img/m01Fundamentos/android-1080.webp",
   "/img/m01Fundamentos/android-640.webp",
   "/img/m01Fundamentos/compilador.svg",
   "/img/m01Fundamentos/fortnite-cube-assassin-boss-1920.webp",
   "/img/m01Fundamentos/fortnite-cube-assassin-boss-640.webp",
   "/img/m01Fundamentos/interprete.svg",
   "/img/m01Fundamentos/ios-1152.webp",
   "/img/m01Fundamentos/ios-640.webp",
   "/img/m01Fundamentos/macos-1152.webp",
   "/img/m01Fundamentos/macos-640.webp",
   "/img/m01Fundamentos/mxlinux-1200.webp",
   "/img/m01Fundamentos/mxlinux-640.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3776817-1920.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3776817-640.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3781725-1920.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3781725-640.webp",
   "/img/m01Fundamentos/pexels-bich-tran-1714341-1920.webp",
   "/img/m01Fundamentos/pexels-bich-tran-1714341-640.webp",
   "/img/m01Fundamentos/pexels-fabian-hurnaus-977296-1920.webp",
   "/img/m01Fundamentos/pexels-fabian-hurnaus-977296-640.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4436291-1920.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4436291-640.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4545975-1920.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4545975-640.webp",
   "/img/m01Fundamentos/pexels-manuel-geissinger-325229-1920.webp",
   "/img/m01Fundamentos/pexels-manuel-geissinger-325229-640.webp",
   "/img/m01Fundamentos/pexels-teona-swift-6912819-1920.webp",
   "/img/m01Fundamentos/pexels-teona-swift-6912819-640.webp",
   "/img/m01Fundamentos/pexels-the-lazy-artist-gallery-1170344-1920.webp",
   "/img/m01Fundamentos/pexels-the-lazy-artist-gallery-1170344-640.webp",
   "/img/m01Fundamentos/pexels-tima-miroshnichenko-6021573-1920.webp",
   "/img/m01Fundamentos/pexels-tima-miroshnichenko-6021573-640.webp",
   "/img/m01Fundamentos/teams-1920.webp",
   "/img/m01Fundamentos/teams-640.webp",
   "/img/m01Fundamentos/windows10-1920.webp",
   "/img/m01Fundamentos/windows10-640.webp",
   "/img/m01Fundamentos/winword-1920.webp",
   "/img/m01Fundamentos/winword-640.webp",
   "/img/m01Fundamentos/youtube-1920.webp",
   "/img/m01Fundamentos/youtube-640.webp",
   "/img/m02Conceptos/Cadena.svg",
   "/img/m02Conceptos/Eslabon.svg",
   "/img/m02Conceptos/pexels-lex-photography-1109543-1920.webp",
   "/img/m02Conceptos/pexels-lex-photography-1109543-640.webp",
   "/img/m02Conceptos/pexels-marek-levak-2265482-1920.webp",
   "/img/m02Conceptos/pexels-marek-levak-2265482-640.webp",
   "/img/m02Conceptos/pexels-pok-rie-1432673-1920.webp",
   "/img/m02Conceptos/pexels-pok-rie-1432673-640.webp",
   "/img/m02Conceptos/pexels-rfstudio-3825581-1920.webp",
   "/img/m02Conceptos/pexels-rfstudio-3825581-640.webp",
   "/img/m02Conceptos/pexels-tranmautritam-326514-1920.webp",
   "/img/m02Conceptos/pexels-tranmautritam-326514-640.webp",
   "/img/m02Conceptos/pexels-valentine-tanasovich-2588757-1920.webp",
   "/img/m02Conceptos/pexels-valentine-tanasovich-2588757-640.webp",
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
   "/img/m17numeros/571px-Kurt-godel1.webp",
   "/img/m17numeros/figura-1.-rectc3a1ngulos-inscritos.webp",
   "/img/m17numeros/octogono-irregular-area.webp",
   "/img/m17numeros/pexels-tara-winstead-6692937-1920.webp",
   "/img/m17numeros/pexels-tara-winstead-6692937-640.webp",
   "/img/m17numeros/Pythagorean_right_angle.svg",
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
   "/m01Fundamentos/",
   "/m01Fundamentos/index.html",
   "/m01Fundamentos/mAcomputadora.html",
   "/m01Fundamentos/mBdispositivos/",
   "/m01Fundamentos/mBdispositivos/index.html",
   "/m01Fundamentos/mBdispositivos/m1wearables.html",
   "/m01Fundamentos/mBdispositivos/m2asistentes.html",
   "/m01Fundamentos/mBdispositivos/m3arduino.html",
   "/m01Fundamentos/mBdispositivos/m4consolas.html",
   "/m01Fundamentos/mBdispositivos/m5celulares.html",
   "/m01Fundamentos/mBdispositivos/m6tablets.html",
   "/m01Fundamentos/mBdispositivos/m7laptops.html",
   "/m01Fundamentos/mBdispositivos/m8desktops.html",
   "/m01Fundamentos/mBdispositivos/m9servidores.html",
   "/m01Fundamentos/mBdispositivos/print.html",
   "/m01Fundamentos/mCprograma.html",
   "/m01Fundamentos/mDoperativo.html",
   "/m01Fundamentos/mEoperativos/",
   "/m01Fundamentos/mEoperativos/index.html",
   "/m01Fundamentos/mEoperativos/m1android.html",
   "/m01Fundamentos/mEoperativos/m2windows.html",
   "/m01Fundamentos/mEoperativos/m3ios.html",
   "/m01Fundamentos/mEoperativos/m4macos.html",
   "/m01Fundamentos/mEoperativos/m5linux.html",
   "/m01Fundamentos/mEoperativos/print.html",
   "/m01Fundamentos/mFprogramas/",
   "/m01Fundamentos/mFprogramas/index.html",
   "/m01Fundamentos/mFprogramas/m1videojuegos.html",
   "/m01Fundamentos/mFprogramas/m2asistentes.html",
   "/m01Fundamentos/mFprogramas/m3oficina.html",
   "/m01Fundamentos/mFprogramas/m4sitios.html",
   "/m01Fundamentos/mFprogramas/m5videoconferencia.html",
   "/m01Fundamentos/mFprogramas/print.html",
   "/m01Fundamentos/mGhardware.html",
   "/m01Fundamentos/mHsoftware.html",
   "/m01Fundamentos/mIlenguaje.html",
   "/m01Fundamentos/mJcompilador.html",
   "/m01Fundamentos/mKinterprete.html",
   "/m01Fundamentos/mLresumen.html",
   "/m01Fundamentos/print.html",
   "/m02Conceptos/",
   "/m02Conceptos/index.html",
   "/m02Conceptos/mAalgoritmo.html",
   "/m02Conceptos/mBmotherboard.html",
   "/m02Conceptos/mCmemoria.html",
   "/m02Conceptos/mDcpu.html",
   "/m02Conceptos/mEentrada.html",
   "/m02Conceptos/mFsalida.html",
   "/m02Conceptos/mGentradaSalida.html",
   "/m02Conceptos/mHjs.html",
   "/m02Conceptos/mItexto.html",
   "/m02Conceptos/mJstring.html",
   "/m02Conceptos/mKlog.html",
   "/m02Conceptos/mLorden.html",
   "/m02Conceptos/mMresumen.html",
   "/m02Conceptos/print.html",
   "/m03pres/",
   "/m03pres/index.html",
   "/m03pres/m1.html",
   "/m03pres/m2.html",
   "/m03pres/m3.html",
   "/m03pres/print.html",
   "/m04apoyo/",
   "/m04apoyo/index.html",
   "/m04apoyo/mAdepuracion.html",
   "/m04apoyo/mBpseudocodigo.html",
   "/m04apoyo/mCdiagramas.html",
   "/m04apoyo/mDpseint.html",
   "/m04apoyo/mEresumen.html",
   "/m04apoyo/print.html",
   "/m05variables/",
   "/m05variables/index.html",
   "/m05variables/mAidentificador.html",
   "/m05variables/mBvariable.html",
   "/m05variables/mCpresVar/",
   "/m05variables/mCpresVar/index.html",
   "/m05variables/mCpresVar/m1.html",
   "/m05variables/mCpresVar/m2.html",
   "/m05variables/mCpresVar/m3.html",
   "/m05variables/mCpresVar/m4.html",
   "/m05variables/mCpresVar/m5depura.html",
   "/m05variables/mCpresVar/print.html",
   "/m05variables/mDpres2Var/",
   "/m05variables/mDpres2Var/index.html",
   "/m05variables/mDpres2Var/m1.html",
   "/m05variables/mDpres2Var/m2.html",
   "/m05variables/mDpres2Var/m3.html",
   "/m05variables/mDpres2Var/m4.html",
   "/m05variables/mDpres2Var/m5.html",
   "/m05variables/mDpres2Var/m6.html",
   "/m05variables/mDpres2Var/m7.html",
   "/m05variables/mDpres2Var/m8.html",
   "/m05variables/mDpres2Var/m9depura.html",
   "/m05variables/mDpres2Var/print.html",
   "/m05variables/mEtextosYVariables.html",
   "/m05variables/mFconstante.html",
   "/m05variables/mGduplicadas.html",
   "/m05variables/mHnoEncontradas.html",
   "/m05variables/mIquestion.html",
   "/m05variables/mJproceso.html",
   "/m05variables/mKresumen.html",
   "/m05variables/print.html",
   "/m06comentarios/",
   "/m06comentarios/index.html",
   "/m06comentarios/mAcomentario.html",
   "/m06comentarios/mBcom1linea.html",
   "/m06comentarios/mCpresCom1linea/",
   "/m06comentarios/mCpresCom1linea/index.html",
   "/m06comentarios/mCpresCom1linea/m1.html",
   "/m06comentarios/mCpresCom1linea/m2.html",
   "/m06comentarios/mCpresCom1linea/m3depura.html",
   "/m06comentarios/mCpresCom1linea/print.html",
   "/m06comentarios/mDcom1oMas.html",
   "/m06comentarios/mEpresCom1oMas/",
   "/m06comentarios/mEpresCom1oMas/index.html",
   "/m06comentarios/mEpresCom1oMas/m1.html",
   "/m06comentarios/mEpresCom1oMas/m2.html",
   "/m06comentarios/mEpresCom1oMas/m3.html",
   "/m06comentarios/mEpresCom1oMas/m4depura.html",
   "/m06comentarios/mEpresCom1oMas/print.html",
   "/m06comentarios/mFJsDoc.html",
   "/m06comentarios/mGresumen.html",
   "/m06comentarios/print.html",
   "/m07bloques/",
   "/m07bloques/index.html",
   "/m07bloques/mAbloque.html",
   "/m07bloques/mBdepuraBloque.html",
   "/m07bloques/mCvariablesDuplicadas.html",
   "/m07bloques/mDresumen.html",
   "/m07bloques/print.html",
   "/m08BoolTxt/",
   "/m08BoolTxt/index.html",
   "/m08BoolTxt/mAboolean.html",
   "/m08BoolTxt/mBigualdadTxt.html",
   "/m08BoolTxt/mCdiferenteTxt.html",
   "/m08BoolTxt/mDresumen.html",
   "/m08BoolTxt/print.html",
   "/m09if/",
   "/m09if/index.html",
   "/m09if/mAif.html",
   "/m09if/mBifTrue.html",
   "/m09if/mCifFalse.html",
   "/m09if/mDresumen.html",
   "/m09if/print.html",
   "/m10ifPrograma/",
   "/m10ifPrograma/index.html",
   "/m10ifPrograma/mAproblema.html",
   "/m10ifPrograma/mBescenarios.html",
   "/m10ifPrograma/mCpseudocodigo.html",
   "/m10ifPrograma/mDdiagrama.html",
   "/m10ifPrograma/mEcodigo.html",
   "/m10ifPrograma/print.html",
   "/m11if-else/",
   "/m11if-else/index.html",
   "/m11if-else/mAif-else.html",
   "/m11if-else/mBif-elseTrue.html",
   "/m11if-else/mCif-elseFalse.html",
   "/m11if-else/mDresumen.html",
   "/m11if-else/print.html",
   "/m12if-elsePrograma/",
   "/m12if-elsePrograma/index.html",
   "/m12if-elsePrograma/mAproblema.html",
   "/m12if-elsePrograma/mBescenarios.html",
   "/m12if-elsePrograma/mCpseudocodigo.html",
   "/m12if-elsePrograma/mDdiagrama.html",
   "/m12if-elsePrograma/mEcodigo.html",
   "/m12if-elsePrograma/print.html",
   "/m13condMult/",
   "/m13condMult/index.html",
   "/m13condMult/mAcondMult.html",
   "/m13condMult/mBcondMultTrue1.html",
   "/m13condMult/mCcondMultTrue2.html",
   "/m13condMult/mDcondMultFalse.html",
   "/m13condMult/mEresumen.html",
   "/m13condMult/print.html",
   "/m14condMultPrograma/",
   "/m14condMultPrograma/index.html",
   "/m14condMultPrograma/mAproblema.html",
   "/m14condMultPrograma/mBescenarios.html",
   "/m14condMultPrograma/mCpseudocodigo.html",
   "/m14condMultPrograma/mDdiagrama.html",
   "/m14condMultPrograma/mEcodigo.html",
   "/m14condMultPrograma/print.html",
   "/m15condMultElse/",
   "/m15condMultElse/index.html",
   "/m15condMultElse/mAcondMult.html",
   "/m15condMultElse/mBcondMultTrue1.html",
   "/m15condMultElse/mCcondMultTrue2.html",
   "/m15condMultElse/mDcondMultFalse.html",
   "/m15condMultElse/mEresumen.html",
   "/m15condMultElse/print.html",
   "/m16condMultElsePrograma/",
   "/m16condMultElsePrograma/index.html",
   "/m16condMultElsePrograma/mAproblema.html",
   "/m16condMultElsePrograma/mBescenarios.html",
   "/m16condMultElsePrograma/mCpseudocodigo.html",
   "/m16condMultElsePrograma/mDdiagrama.html",
   "/m16condMultElsePrograma/mEcodigo.html",
   "/m16condMultElsePrograma/print.html",
   "/m17numeros/",
   "/m17numeros/index.html",
   "/m17numeros/mAnaturales.html",
   "/m17numeros/mBsuma.html",
   "/m17numeros/mCmultiplicacion.html",
   "/m17numeros/mDenteros.html",
   "/m17numeros/mEracionales.html",
   "/m17numeros/mFirracionales.html",
   "/m17numeros/mGrarezas.html",
   "/m17numeros/mHgodel.html",
   "/m17numeros/mInumber.html",
   "/m17numeros/mJresumen.html",
   "/m17numeros/print.html",
   "/m18textos/",
   "/m18textos/index.html",
   "/m18textos/mAconcatenacion.html",
   "/m18textos/mBconcatAsig.html",
   "/m18textos/mCplantilla.html",
   "/m18textos/mDmenor.html",
   "/m18textos/mEmayor.html",
   "/m18textos/mFmenorIgual.html",
   "/m18textos/mGmayorIgual.html",
   "/m18textos/mHresumen.html",
   "/m18textos/print.html",
   "/m19logicos/",
   "/m19logicos/index.html",
   "/m19logicos/mAy.html",
   "/m19logicos/mBo.html",
   "/m19logicos/mCno.html",
   "/m19logicos/mDternario.html",
   "/m19logicos/mEresumen.html",
   "/m19logicos/print.html",
   "/m20do-while/",
   "/m20do-while/index.html",
   "/m20do-while/mAdo-while.html",
   "/m20do-while/mBdo-whileEj.html",
   "/m20do-while/mCresumen.html",
   "/m20do-while/print.html",
   "/m21do-whilePrograma/",
   "/m21do-whilePrograma/index.html",
   "/m21do-whilePrograma/mAproblema.html",
   "/m21do-whilePrograma/mBescenarios.html",
   "/m21do-whilePrograma/mCpseudocodigo.html",
   "/m21do-whilePrograma/mDdiagrama.html",
   "/m21do-whilePrograma/mEcodigo.html",
   "/m21do-whilePrograma/print.html",
   "/m22masNumeros/",
   "/m22masNumeros/index.html",
   "/m22masNumeros/mArecta.html",
   "/m22masNumeros/mBopsArit.html",
   "/m22masNumeros/mCopsAritAsig.html",
   "/m22masNumeros/mDIncrDecr.html",
   "/m22masNumeros/mEigualdad.html",
   "/m22masNumeros/mForden.html",
   "/m22masNumeros/mGordenIgual.html",
   "/m22masNumeros/mHprecedencia.html",
   "/m22masNumeros/mIexpresiones.html",
   "/m22masNumeros/mJresumen.html",
   "/m22masNumeros/print.html",
   "/m23while/",
   "/m23while/index.html",
   "/m23while/mAwhile.html",
   "/m23while/mBwhileAsc.html",
   "/m23while/mCwhileAsc2.html",
   "/m23while/mDwhileDesc.html",
   "/m23while/mEwhileDesc2.html",
   "/m23while/mFwhileNoEjec.html",
   "/m23while/mGwhileDescMal.html",
   "/m23while/mHwhileAscMal.html",
   "/m23while/mIresumen.html",
   "/m23while/print.html",
   "/m24for/",
   "/m24for/index.html",
   "/m24for/mAfor.html",
   "/m24for/mBforEj.html",
   "/m24for/mCresumen.html",
   "/m24for/print.html",
   "/m25switch/",
   "/m25switch/index.html",
   "/m25switch/mAswitch.html",
   "/m25switch/mBswitchEj.html",
   "/m25switch/mCswitchDefault.html",
   "/m25switch/mDswitchDefaultEj.html",
   "/m25switch/mEresumen.html",
   "/m25switch/print.html",
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