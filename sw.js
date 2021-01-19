/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "gilpgijs-1.11";

/**  Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "3_html/cmp/ctrl-diapositiva.js",
  "3_html/cmp/nav-local.js",
  "3_html/src/1_hola_mundo.html",
  "3_html/src/2_hola_mundo_comentario.html",
  "3_html/src/3_hola_mundo_doctype.html",
  "3_html/src/4_hola_mundo_elementos.html",
  "3_html/src/5_hola_mundo_atributos.html",
  "3_html/src/6_hola_mundo_con_contenido.html",
  "3_html/src/7_hola_mundo_sin_contenido.html",
  "3_html/src/8_hola_mundo_padres.html",
  "3_html/src/9_hola_mundo_hijos.html",
  "3_html/src/10_hola_mundo_html.html",
  "3_html/src/11_hola_mundo_head.html",
  "3_html/src/12_hola_mundo_codificacion.html",
  "3_html/src/13_hola_mundo_viewport.html",
  "3_html/src/14_hola_mundo_title.html",
  "3_html/src/15_hola_mundo_body.html",
  "3_html/src/16_hola_mundo_h1.html",
  "3_html/src/17_hola_mundo_p.html",
  "3_html/src/18_hola_mundo_footer.html",
  "3_html/src/19_hola_mundo_referencia.html",
  "3_html/2_contenido.html",
  "3_html/3_SGML.html",
  "3_html/4_comentarios.html",
  "3_html/5_doctype.html",
  "3_html/6_elementos.html",
  "3_html/7_atributos.html",
  "3_html/8_con_contenido.html",
  "3_html/9_sin_contenido.html",
  "3_html/10_padres.html",
  "3_html/11_hijos.html",
  "3_html/12_html.html",
  "3_html/13_head.html",
  "3_html/14_codificacion.html",
  "3_html/15_viewport.html",
  "3_html/16_title.html",
  "3_html/17_body.html",
  "3_html/18_fraseo.html",
  "3_html/19_h1.html",
  "3_html/20_p.html",
  "3_html/21_cierran_p.html",
  "3_html/22_footer.html",
  "3_html/23_referencias.html",
  "3_html/25_resumen.html",
  "3_html/index.html",
  "4_css/cmp/ctrl-diapositiva.js",
  "4_css/cmp/nav-local.js",
  "4_css/src/1_hola_mundo.html",
  "4_css/src/2_hola_mundo_style.html",
  "4_css/src/3_hola_mundo_comentario.html",
  "4_css/src/4_hola_mundo_reglas.html",
  "4_css/src/5_hola_mundo_selectores.html",
  "4_css/src/6_hola_mundo_propiedades.html",
  "4_css/src/7_hola_mundo_font-family.html",
  "4_css/src/8_hola_mundo_color.html",
  "4_css/src/9_hola_mundo_backgroud-color.html",
  "4_css/2_contenido.html",
  "4_css/3_CSS.html",
  "4_css/4_style.html",
  "4_css/5_comentarios.html",
  "4_css/6_reglas.html",
  "4_css/7_selectores.html",
  "4_css/8_propiedades.html",
  "4_css/9_fonts.html",
  "4_css/10_font-family.html",
  "4_css/11_colores.html",
  "4_css/12_color.html",
  "4_css/13_background-color.html",
  "4_css/15_resumen.html",
  "4_css/index.html",
  "5_js/cmp/ctrl-diapositiva.js",
  "5_js/cmp/nav-local.js",
  "5_js/img/Cadena.svg",
  "5_js/img/Eslabon.svg",
  "5_js/img/winlogo.png",
  "5_js/2_contenido.html",
  "5_js/3_js.html",
  "5_js/4_textos.html",
  "5_js/5_numeros.html",
  "5_js/6_logicos.html",
  "5_js/7_console.html",
  "5_js/9_comentarios.html",
  "5_js/10_una.html",
  "5_js/11_una_o_mas.html",
  "5_js/12_resumen.html",
  "5_js/index.html",
  "6_variables/cmp/ctrl-diapositiva.js",
  "6_variables/cmp/nav-local.js",
  "6_variables/2_contenido.html",
  "6_variables/3_identificadores.html",
  "6_variables/4_variables.html",
  "6_variables/6_constantes.html",
  "6_variables/7_duplicadas.html",
  "6_variables/8_jsdoc.html",
  "6_variables/9_resumen.html",
  "6_variables/index.html",
  "7_chismes/cmp/ctrl-diapositiva.js",
  "7_chismes/cmp/nav-local.js",
  "7_chismes/src/1_chismes.html",
  "7_chismes/src/2_chismes_script.html",
  "7_chismes/src/3_chismes_button.html",
  "7_chismes/src/4_chismes_output.html",
  "7_chismes/src/5_chismes_id.html",
  "7_chismes/src/6_chismes_value.html",
  "7_chismes/2_contenido.html",
  "7_chismes/3_problema.html",
  "7_chismes/4_diseno.html",
  "7_chismes/5_codigo.html",
  "7_chismes/6_funciones.html",
  "7_chismes/7_script.html",
  "7_chismes/8_button.html",
  "7_chismes/9_output.html",
  "7_chismes/10_id.html",
  "7_chismes/11_value.html",
  "7_chismes/13_resumen.html",
  "7_chismes/index.html",
  "8_textos/cmp/ctrl-diapositiva.js",
  "8_textos/cmp/nav-local.js",
  "8_textos/2_contenido.html",
  "8_textos/3_ops_txt.html",
  "8_textos/4_asignacion.html",
  "8_textos/5_plantillas.html",
  "8_textos/6_igualdad.html",
  "8_textos/7_orden.html",
  "8_textos/8_orden_igualdad.html",
  "8_textos/9_resumen.html",
  "8_textos/index.html",
  "9_numeros/cmp/ctrl-diapositiva.js",
  "9_numeros/cmp/nav-local.js",
  "9_numeros/img/recta.svg",
  "9_numeros/2_contenido.html",
  "9_numeros/3_recta.html",
  "9_numeros/4_ops_num.html",
  "9_numeros/5_asignacion.html",
  "9_numeros/6_incr_y_decr.html",
  "9_numeros/7_igualdad.html",
  "9_numeros/8_orden.html",
  "9_numeros/9_orden_igualdad.html",
  "9_numeros/10_resumen.html",
  "9_numeros/index.html",
  "10_animaciones/cmp/ctrl-diapositiva.js",
  "10_animaciones/cmp/nav-local.js",
  "10_animaciones/img/cuadratica.png",
  "10_animaciones/img/recta.png",
  "10_animaciones/src/1_sprite.html",
  "10_animaciones/src/2_anima_horizontal.html",
  "10_animaciones/src/3_anima_recta.html",
  "10_animaciones/src/4_ondula.html",
  "10_animaciones/src/5_gira.html",
  "10_animaciones/src/6_fondo.html",
  "10_animaciones/2_contenido.html",
  "10_animaciones/3_tamanos.html",
  "10_animaciones/4_sprites.html",
  "10_animaciones/5_precedencia.html",
  "10_animaciones/6_expresiones.html",
  "10_animaciones/7_anima_horizontal.html",
  "10_animaciones/8_anima_recta.html",
  "10_animaciones/9_ondula.html",
  "10_animaciones/10_gira.html",
  "10_animaciones/11_fondo.html",
  "10_animaciones/index.html",
  "11_mueve_botones/cmp/ctrl-diapositiva.js",
  "11_mueve_botones/cmp/nav-local.js",
  "11_mueve_botones/img/if.svg",
  "11_mueve_botones/src/4_mueve_botones.html",
  "11_mueve_botones/2_contenido.html",
  "11_mueve_botones/3_funciones_funciones.html",
  "11_mueve_botones/4_if.html",
  "11_mueve_botones/5_codigo.html",
  "11_mueve_botones/index.html",
  "12_choques/cmp/ctrl-diapositiva.js",
  "12_choques/cmp/nav-local.js",
  "12_choques/src/8_choca.html",
  "12_choques/2_contenido.html",
  "12_choques/3_funciones_parametros.html",
  "12_choques/4_funciones_parametros_expresiones.html",
  "12_choques/5_funciones_return.html",
  "12_choques/6_op_y.html",
  "12_choques/7_op_o.html",
  "12_choques/8_op_no.html",
  "12_choques/9_op_ternario.html",
  "12_choques/10_codigo.html",
  "12_choques/index.html",
  "13_sonrie/cmp/ctrl-diapositiva.js",
  "13_sonrie/cmp/nav-local.js",
  "13_sonrie/img/if-else.svg",
  "13_sonrie/src/3_sonrie.html",
  "13_sonrie/2_contenido.html",
  "13_sonrie/3_if_else.html",
  "13_sonrie/4_codigo.html",
  "13_sonrie/index.html",
  "14_mueve_aleatorio/cmp/ctrl-diapositiva.js",
  "14_mueve_aleatorio/cmp/nav-local.js",
  "14_mueve_aleatorio/img/condicional-multiple.svg",
  "14_mueve_aleatorio/src/4_mueve_aleatorio.html",
  "14_mueve_aleatorio/2_contenido.html",
  "14_mueve_aleatorio/3_multiple.html",
  "14_mueve_aleatorio/4_codigo.html",
  "14_mueve_aleatorio/index.html",
  "15_recomendaciones/cmp/ctrl-diapositiva.js",
  "15_recomendaciones/cmp/nav-local.js",
  "15_recomendaciones/img/condicional-multiple-else.svg",
  "15_recomendaciones/src/5_recomendaciones.html",
  "15_recomendaciones/2_contenido.html",
  "15_recomendaciones/3_multiple_else.html",
  "15_recomendaciones/4_problema.html",
  "15_recomendaciones/5_diseno.html",
  "15_recomendaciones/6_codigo.html",
  "15_recomendaciones/index.html",
  "16_switch/cmp/ctrl-diapositiva.js",
  "16_switch/cmp/nav-local.js",
  "16_switch/img/switch-default.svg",
  "16_switch/img/switch.svg",
  "16_switch/src/6_switch.html",
  "16_switch/src/7_switch_default.html",
  "16_switch/2_contenido.html",
  "16_switch/3_switch.html",
  "16_switch/4_switch_default.html",
  "16_switch/5_codigo.html",
  "16_switch/6_codigo_switch.html",
  "16_switch/index.html",
  "17_recta/cmp/ctrl-diapositiva.js",
  "17_recta/cmp/nav-local.js",
  "17_recta/img/while.svg",
  "17_recta/src/4_adorno_recta.html",
  "17_recta/2_contenido.html",
  "17_recta/3_while.html",
  "17_recta/4_codigo.html",
  "17_recta/index.html",
  "18_girando/cmp/ctrl-diapositiva.js",
  "18_girando/cmp/nav-local.js",
  "18_girando/img/for.svg",
  "18_girando/src/4_adorno_gira.html",
  "18_girando/2_contenido.html",
  "18_girando/3_for.html",
  "18_girando/4_codigo.html",
  "18_girando/index.html",
  "19_elige_giros/cmp/ctrl-diapositiva.js",
  "19_elige_giros/cmp/nav-local.js",
  "19_elige_giros/img/do-while.svg",
  "19_elige_giros/src/4_adorno_gira_datos.html",
  "19_elige_giros/2_contenido.html",
  "19_elige_giros/3_do-while.html",
  "19_elige_giros/4_codigo.html",
  "19_elige_giros/index.html",
  "cmp/base.js",
  "cmp/mi-footer.js",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "css/material-icons.css",
  "css/MaterialIcons-Regular.codepoints",
  "css/MaterialIcons-Regular.ttf",
  "css/mi-footer.css",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "js/registraServiceWorker.js",
  "js/title.js",
  "lib/comun.js",
  "lib/ctrl-diapositiva.css",
  "lib/CtrlDiapositiva.js",
  "lib/layout-cajon_shadow.js",
  "lib/layout-cajon.js",
  "lib/muestra-codigo_shadow.js",
  "lib/muestra-codigo.js",
  "lib/utilHtml.js",
  "2_sw.html",
  "favicon.ico",
  "index.html",
  "manifest.json",
  '/'
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  if (evt.request.method === "GET") {
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}