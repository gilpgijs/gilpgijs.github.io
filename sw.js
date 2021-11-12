/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "gilpgijs-2.60.07"

/** Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
 "favicon.ico",
 "index.html",
 "LICENSE",
 "print.html",
 "site.webmanifest",
 "10_textos/a_number.html",
 "10_textos/b_concatenacion.html",
 "10_textos/c_asignacion.html",
 "10_textos/d_plantillas.html",
 "10_textos/e_orden.html",
 "10_textos/f_orden_igualdad.html",
 "10_textos/g_resumen.html",
 "10_textos/index.html",
 "10_textos/print.html",
 "10_textos/cmp/a-number.js",
 "10_textos/cmp/b-concatenacion.js",
 "10_textos/cmp/c-asignacion-10.js",
 "10_textos/cmp/d-plantillas.js",
 "10_textos/cmp/e-orden-10.js",
 "10_textos/cmp/f-orden-igualdad.js",
 "10_textos/cmp/g-resumen-10.js",
 "10_textos/cmp/textos-contenido.js",
 "10_textos/cmp/textos-index.js",
 "10_textos/cmp/textos-print.js",
 "10_textos/src/1_concatenacion.html",
 "10_textos/src/2_asignacion.html",
 "10_textos/src/3_plantillas.html",
 "10_textos/src/4_ops_orden.html",
 "10_textos/src/5_ops_orden_igualdad.html",
 "11_logicos/a_op_y.html",
 "11_logicos/b_op_o.html",
 "11_logicos/c_op_no.html",
 "11_logicos/d_op_ternario.html",
 "11_logicos/e_resumen.html",
 "11_logicos/index.html",
 "11_logicos/print.html",
 "11_logicos/cmp/a-op-y.js",
 "11_logicos/cmp/b-op-o.js",
 "11_logicos/cmp/c-op-no.js",
 "11_logicos/cmp/d-op-ternario.js",
 "11_logicos/cmp/e-resumen-11.js",
 "11_logicos/cmp/logicos-contenido.js",
 "11_logicos/cmp/logicos-index.js",
 "11_logicos/cmp/logicos-print.js",
 "11_logicos/src/1_op_y.html",
 "11_logicos/src/2_op_o.html",
 "11_logicos/src/3_op_no.html",
 "11_logicos/src/4_op_ternario.html",
 "12_do_while/a_do_while.html",
 "12_do_while/b_codigo.html",
 "12_do_while/c_resumen.html",
 "12_do_while/index.html",
 "12_do_while/print.html",
 "12_do_while/3_do_while_prog/2_problema.html",
 "12_do_while/3_do_while_prog/3_escenarios.html",
 "12_do_while/3_do_while_prog/4_diseno.html",
 "12_do_while/3_do_while_prog/5_codigo.html",
 "12_do_while/3_do_while_prog/index.html",
 "12_do_while/cmp/a-do-while.js",
 "12_do_while/cmp/b-codigo-12.js",
 "12_do_while/cmp/c-resumen-12.js",
 "12_do_while/cmp/do-while-contenido.js",
 "12_do_while/cmp/do-while-index.js",
 "12_do_while/cmp/do-while-print.js",
 "12_do_while/img/do-while.png",
 "12_do_while/img/do-while.svg",
 "12_do_while/src/1_do_while.html",
 "12_do_while/src/2_do_while_prog.html",
 "13_numeros/a_naturales.html",
 "13_numeros/b_cero.html",
 "13_numeros/c_suma.html",
 "13_numeros/d_multiplicacion.html",
 "13_numeros/e_enteros.html",
 "13_numeros/f_racionales.html",
 "13_numeros/g_irracionales.html",
 "13_numeros/h_rarezas.html",
 "13_numeros/index.html",
 "13_numeros/i_godel.html",
 "13_numeros/j_resumen.html",
 "13_numeros/print.html",
 "13_numeros/cmp/a-naturales.js",
 "13_numeros/cmp/b-cero.js",
 "13_numeros/cmp/c-suma.js",
 "13_numeros/cmp/d-multiplicacion.js",
 "13_numeros/cmp/e-enteros.js",
 "13_numeros/cmp/f-racionales.js",
 "13_numeros/cmp/g-irracionales.js",
 "13_numeros/cmp/h-rarezas.js",
 "13_numeros/cmp/i-godel.js",
 "13_numeros/cmp/j-resumen-13.js",
 "13_numeros/cmp/numeros-contenido.js",
 "13_numeros/cmp/numeros-index.js",
 "13_numeros/cmp/numeros-print.js",
 "13_numeros/img/480px-India_(orthographic_projection).svg.png",
 "13_numeros/img/571px-Kurt-godel1.jpg",
 "13_numeros/img/figura-1.-rectc3a1ngulos-inscritos.webp",
 "13_numeros/img/octogono-irregular-area.jpg",
 "13_numeros/img/pexels-tara-winstead-6692937.jpg",
 "13_numeros/img/pexels-yan-krukov-8613095.jpg",
 "13_numeros/img/Pythagorean_right_angle.svg",
 "14_mas_numeros/a_recta.html",
 "14_mas_numeros/b_ops_num.html",
 "14_mas_numeros/c_asignacion.html",
 "14_mas_numeros/d_incr_y_decr.html",
 "14_mas_numeros/e_igualdad.html",
 "14_mas_numeros/f_orden.html",
 "14_mas_numeros/g_orden_igualdad.html",
 "14_mas_numeros/h_precedencia.html",
 "14_mas_numeros/index.html",
 "14_mas_numeros/i_expresiones.html",
 "14_mas_numeros/j_resumen.html",
 "14_mas_numeros/print.html",
 "14_mas_numeros/cmp/a-recta.js",
 "14_mas_numeros/cmp/b-ops-num.js",
 "14_mas_numeros/cmp/c-asignacion.js",
 "14_mas_numeros/cmp/d-incr-y-decr.js",
 "14_mas_numeros/cmp/e-igualdad.js",
 "14_mas_numeros/cmp/f-orden-14.js",
 "14_mas_numeros/cmp/g-orden-igualdad.js",
 "14_mas_numeros/cmp/h-precedencia.js",
 "14_mas_numeros/cmp/i-expresiones.js",
 "14_mas_numeros/cmp/j-resumen-14.js",
 "14_mas_numeros/cmp/mas-numeros-contenido.js",
 "14_mas_numeros/cmp/mas-numeros-index.js",
 "14_mas_numeros/cmp/mas-numeros-print.js",
 "14_mas_numeros/img/cuadratica.png",
 "14_mas_numeros/img/recta.png",
 "14_mas_numeros/img/recta.svg",
 "14_mas_numeros/src/1_ops_num.html",
 "14_mas_numeros/src/2_asignacion.html",
 "14_mas_numeros/src/3_incr_y_decr.html",
 "14_mas_numeros/src/4_op_igual.html",
 "14_mas_numeros/src/5_orden.html",
 "14_mas_numeros/src/6_op_orden_igual.html",
 "15_while/a_while.html",
 "15_while/b_pres_while_asc.html",
 "15_while/c_pres_while_asc_2.html",
 "15_while/d_pres_while_desc.html",
 "15_while/e_pres_while_desc_2.html",
 "15_while/f_pres_while_no_ejec.html",
 "15_while/g_pres_while_desc_mal.html",
 "15_while/h_pres_while_asc_mal.html",
 "15_while/index.html",
 "15_while/i_resumen.html",
 "15_while/print.html",
 "15_while/cmp/a-15-while.js",
 "15_while/cmp/b-15-pres-while-asc.js",
 "15_while/cmp/c-15-pres-while-asc-2.js",
 "15_while/cmp/d-15-pres-while-desc.js",
 "15_while/cmp/e-15-pres-while-desc-2.js",
 "15_while/cmp/f-15-pres-while-no-ejec.js",
 "15_while/cmp/g-15-pres-while-desc-mal.js",
 "15_while/cmp/h-15-pres-while-asc-mal.js",
 "15_while/cmp/i-15-resumen.js",
 "15_while/cmp/while-contenido.js",
 "15_while/cmp/while-index.js",
 "15_while/cmp/while-print.js",
 "15_while/img/while.svg",
 "15_while/src/1_while_asc.html",
 "15_while/src/2_while_asc_2.html",
 "15_while/src/3_while_desc.html",
 "15_while/src/4_while_desc_2.html",
 "15_while/src/5_while_no_ej.html",
 "15_while/src/6_while_desc_mal.html",
 "15_while/src/7_while_asc_mal.html",
 "16_for/a_for.html",
 "16_for/b_pres_for.html",
 "16_for/c_resumen.html",
 "16_for/index.html",
 "16_for/print.html",
 "16_for/3_for_prog/2_problema.html",
 "16_for/3_for_prog/3_escenarios.html",
 "16_for/3_for_prog/4_diseno.html",
 "16_for/3_for_prog/5_codigo.html",
 "16_for/3_for_prog/index.html",
 "16_for/cmp/a-16-for.js",
 "16_for/cmp/b-16-codigo.js",
 "16_for/cmp/c-16-resumen.js",
 "16_for/cmp/for-contenido.js",
 "16_for/cmp/for-index.js",
 "16_for/cmp/for-print.js",
 "16_for/img/for.svg",
 "16_for/src/1_for_asc.html",
 "17_switch/a_switch.html",
 "17_switch/b_codigo_switch.html",
 "17_switch/c_switch_default.html",
 "17_switch/d_codigo_switch_default.html",
 "17_switch/e_resumen.html",
 "17_switch/index.html",
 "17_switch/print.html",
 "17_switch/cmp/a-17-switch.js",
 "17_switch/cmp/b-17-codigo-switch.js",
 "17_switch/cmp/c-17-switch-default.js",
 "17_switch/cmp/d-17-codigo-switch-default.js",
 "17_switch/cmp/e-17-resumen.js",
 "17_switch/cmp/switch-contenido.js",
 "17_switch/cmp/switch-index.js",
 "17_switch/cmp/switch-print.js",
 "17_switch/img/switch-default.svg",
 "17_switch/img/switch.svg",
 "17_switch/src/1_switch.html",
 "17_switch/src/2_switch_default.html",
 "1_fundamentos/a_computadora.html",
 "1_fundamentos/c_programa.html",
 "1_fundamentos/d_operativo.html",
 "1_fundamentos/g_hardware.html",
 "1_fundamentos/h_software.html",
 "1_fundamentos/index.html",
 "1_fundamentos/i_lenguaje.html",
 "1_fundamentos/j_compilador.html",
 "1_fundamentos/k_interprete.html",
 "1_fundamentos/l_resumen.html",
 "1_fundamentos/print.html",
 "1_fundamentos/b_dispositivos/1_wearables.html",
 "1_fundamentos/b_dispositivos/2_assistants.html",
 "1_fundamentos/b_dispositivos/3_arduino.html",
 "1_fundamentos/b_dispositivos/4_consolas.html",
 "1_fundamentos/b_dispositivos/5_celulares.html",
 "1_fundamentos/b_dispositivos/6_tablets.html",
 "1_fundamentos/b_dispositivos/7_laptops.html",
 "1_fundamentos/b_dispositivos/8_desktops.html",
 "1_fundamentos/b_dispositivos/9_servidores.html",
 "1_fundamentos/b_dispositivos/index.html",
 "1_fundamentos/b_dispositivos/print.html",
 "1_fundamentos/b_dispositivos/js/d1b1Wearables.js",
 "1_fundamentos/b_dispositivos/js/d1b2Assistants.js",
 "1_fundamentos/b_dispositivos/js/d1b3Arduino.js",
 "1_fundamentos/b_dispositivos/js/d1b4Consolas.js",
 "1_fundamentos/b_dispositivos/js/d1b5Celulares.js",
 "1_fundamentos/b_dispositivos/js/d1b6Tablets.js",
 "1_fundamentos/b_dispositivos/js/d1b7Laptops.js",
 "1_fundamentos/b_dispositivos/js/d1b8Desktops.js",
 "1_fundamentos/b_dispositivos/js/d1b9Servidores.js",
 "1_fundamentos/b_dispositivos/js/d1bDispositivosContenido.js",
 "1_fundamentos/b_dispositivos/js/d1bDispositivosIndex.js",
 "1_fundamentos/b_dispositivos/js/d1bDispositivosPrint.js",
 "1_fundamentos/e_operativos/1_android.html",
 "1_fundamentos/e_operativos/2_windows.html",
 "1_fundamentos/e_operativos/3_ios.html",
 "1_fundamentos/e_operativos/4_macos.html",
 "1_fundamentos/e_operativos/5_linux.html",
 "1_fundamentos/e_operativos/index.html",
 "1_fundamentos/e_operativos/print.html",
 "1_fundamentos/e_operativos/js/d1e1Android.js",
 "1_fundamentos/e_operativos/js/d1e2Windows.js",
 "1_fundamentos/e_operativos/js/d1e3Ios.js",
 "1_fundamentos/e_operativos/js/d1e4Macos.js",
 "1_fundamentos/e_operativos/js/d1e5Linux.js",
 "1_fundamentos/e_operativos/js/d1eOperativosContenido.js",
 "1_fundamentos/e_operativos/js/d1eOperativosIndex.js",
 "1_fundamentos/e_operativos/js/d1eOperativosPrint.js",
 "1_fundamentos/f_programas/1_juegos.html",
 "1_fundamentos/f_programas/2_asistentes.html",
 "1_fundamentos/f_programas/3_oficina.html",
 "1_fundamentos/f_programas/4_sitios.html",
 "1_fundamentos/f_programas/5_videoconferencia.html",
 "1_fundamentos/f_programas/index.html",
 "1_fundamentos/f_programas/print.html",
 "1_fundamentos/f_programas/js/d1f1Juegos.js",
 "1_fundamentos/f_programas/js/d1f2Asistentes.js",
 "1_fundamentos/f_programas/js/d1f3Oficina.js",
 "1_fundamentos/f_programas/js/d1f4Sitios.js",
 "1_fundamentos/f_programas/js/d1f5Videoconferencia.js",
 "1_fundamentos/f_programas/js/d1fProgramasContenido.js",
 "1_fundamentos/f_programas/js/d1fProgramasIndex.js",
 "1_fundamentos/f_programas/js/d1fProgramasPrint.js",
 "1_fundamentos/img/android.webp",
 "1_fundamentos/img/compilador.svg",
 "1_fundamentos/img/fortnite.webp",
 "1_fundamentos/img/interprete.svg",
 "1_fundamentos/img/ios.webp",
 "1_fundamentos/img/macos.webp",
 "1_fundamentos/img/mx-small.webp",
 "1_fundamentos/img/pexels-andrea-piacquadio-3776817.webp",
 "1_fundamentos/img/pexels-andrea-piacquadio-3781725.webp",
 "1_fundamentos/img/pexels-bich-tran-1714341.webp",
 "1_fundamentos/img/pexels-fabian-hurnaus-977296.webp",
 "1_fundamentos/img/pexels-ketut-subiyanto-4436291.webp",
 "1_fundamentos/img/pexels-ketut-subiyanto-4545975.webp",
 "1_fundamentos/img/pexels-manuel-geissinger-325229.webp",
 "1_fundamentos/img/pexels-teona-swift-6912819.webp",
 "1_fundamentos/img/pexels-the-lazy-artist-gallery-1170344.webp",
 "1_fundamentos/img/pexels-tima-miroshnichenko-6021573.webp",
 "1_fundamentos/img/teams.webp",
 "1_fundamentos/img/windows10.webp",
 "1_fundamentos/img/youtube.webp",
 "1_fundamentos/js/d1aComputadora.js",
 "1_fundamentos/js/d1cPrograma.js",
 "1_fundamentos/js/d1dOperativo.js",
 "1_fundamentos/js/d1gHardware.js",
 "1_fundamentos/js/d1hSoftware.js",
 "1_fundamentos/js/d1iLenguaje.js",
 "1_fundamentos/js/d1jCompilador.js",
 "1_fundamentos/js/d1kInterprete.js",
 "1_fundamentos/js/d1lResumen.js",
 "1_fundamentos/js/fundamentosContenido.js",
 "1_fundamentos/js/fundamentosIndex.js",
 "1_fundamentos/js/fundamentosPrint.js",
 "1_fundamentos/js/miNav.js",
 "2_conceptos/a_algoritmo.html",
 "2_conceptos/b_js.html",
 "2_conceptos/c_textos.html",
 "2_conceptos/d_string.html",
 "2_conceptos/e_log.html",
 "2_conceptos/f_cpu.html",
 "2_conceptos/g_memoria.html",
 "2_conceptos/h_entrada_salida.html",
 "2_conceptos/index.html",
 "2_conceptos/i_orden.html",
 "2_conceptos/j_pseudocodigo.html",
 "2_conceptos/k_diagramas.html",
 "2_conceptos/l_resumen.html",
 "2_conceptos/print.html",
 "2_conceptos/6_pres/1.html",
 "2_conceptos/6_pres/2.html",
 "2_conceptos/6_pres/3.html",
 "2_conceptos/6_pres/index.html",
 "2_conceptos/img/Cadena.svg",
 "2_conceptos/img/Eslabon.svg",
 "2_conceptos/img/winlogo.png",
 "2_conceptos/img/winlogo.xcf",
 "2_conceptos/js/conceptosContenido.js",
 "2_conceptos/js/conceptosIndex.js",
 "2_conceptos/js/conceptosPrint.js",
 "2_conceptos/js/d2aAlgoritmo.js",
 "2_conceptos/js/d2bjs.js",
 "2_conceptos/js/d2cTextos.js",
 "2_conceptos/js/d2dString.js",
 "2_conceptos/js/d2elog.js",
 "2_conceptos/js/d2fCPU.js",
 "2_conceptos/js/d2gMemoria.js",
 "2_conceptos/js/d2hEntradaSalida.js",
 "2_conceptos/js/d2iOrden.js",
 "2_conceptos/js/d2jPseudocodigo.js",
 "2_conceptos/js/d2kDiagrama.js",
 "2_conceptos/js/d2lResumen.js",
 "2_conceptos/js/miNav.js",
 "2_conceptos/src/1_orden.html",
 "3_variables/a_identificadores.html",
 "3_variables/b_proceso.html",
 "3_variables/b_variables.html",
 "3_variables/c_constantes.html",
 "3_variables/d_duplicadas.html",
 "3_variables/e_no_encontradas.html",
 "3_variables/f_prompt.html",
 "3_variables/g_resumen.html",
 "3_variables/index.html",
 "3_variables/print.html",
 "3_variables/3_pres_var/1.html",
 "3_variables/3_pres_var/2.html",
 "3_variables/3_pres_var/3.html",
 "3_variables/3_pres_var/4.html",
 "3_variables/3_pres_var/5.html",
 "3_variables/3_pres_var/6.html",
 "3_variables/3_pres_var/7.html",
 "3_variables/3_pres_var/8.html",
 "3_variables/3_pres_var/9.html",
 "3_variables/3_pres_var/index.html",
 "3_variables/cmp/a-identificadores.js",
 "3_variables/cmp/b-proceso-1.js",
 "3_variables/cmp/b-variables.js",
 "3_variables/cmp/c-constantes.js",
 "3_variables/cmp/d-duplicadas.js",
 "3_variables/cmp/e-no-encontradas.js",
 "3_variables/cmp/f-prompt.js",
 "3_variables/cmp/g-resumen-3.js",
 "3_variables/cmp/variables-contenido.js",
 "3_variables/cmp/variables-index.js",
 "3_variables/cmp/variables-print.js",
 "3_variables/src/1_variables.html",
 "3_variables/src/2_constantes.html",
 "3_variables/src/3_duplicados.html",
 "3_variables/src/4_no_definida.html",
 "3_variables/src/5_prompt.html",
 "4_comentarios/a_comentarios.html",
 "4_comentarios/b_com_1.html",
 "4_comentarios/c_com_1_o_mas.html",
 "4_comentarios/d_JsDoc.html",
 "4_comentarios/e_resumen.html",
 "4_comentarios/index.html",
 "4_comentarios/print.html",
 "4_comentarios/3_pres_com_1/1.html",
 "4_comentarios/3_pres_com_1/2.html",
 "4_comentarios/3_pres_com_1/index.html",
 "4_comentarios/5_pres_1_o_mas/1.html",
 "4_comentarios/5_pres_1_o_mas/2.html",
 "4_comentarios/5_pres_1_o_mas/3.html",
 "4_comentarios/5_pres_1_o_mas/index.html",
 "4_comentarios/cmp/a-comentarios.js",
 "4_comentarios/cmp/b-com-1.js",
 "4_comentarios/cmp/c-com-1-o-mas.js",
 "4_comentarios/cmp/comentarios-contenido.js",
 "4_comentarios/cmp/comentarios-index.js",
 "4_comentarios/cmp/comentarios-print.js",
 "4_comentarios/cmp/d-jsdoc.js",
 "4_comentarios/cmp/e-resumen-4.js",
 "4_comentarios/src/1_comentarios_una.html",
 "4_comentarios/src/2_comentarios_una_o_mas.html",
 "4_comentarios/src/3_JsDoc.html",
 "5_bloques/a_bloques.html",
 "5_bloques/b_pres_bloque.html",
 "5_bloques/c_pres_bloque_v_d.html",
 "5_bloques/d_resumen.html",
 "5_bloques/index.html",
 "5_bloques/print.html",
 "5_bloques/cmp/a-bloques.js",
 "5_bloques/cmp/b-pres-bloque.js",
 "5_bloques/cmp/bloques-contenido.js",
 "5_bloques/cmp/bloques-index.js",
 "5_bloques/cmp/bloques-print.js",
 "5_bloques/cmp/c-pres-bloque-v-d.js",
 "5_bloques/cmp/d-resumen.js",
 "5_bloques/src/1_bloques.html",
 "5_bloques/src/2_dup_blk.html",
 "6_if/a_boolean.html",
 "6_if/b_txt_igualdad.html",
 "6_if/c_txt_diferente.html",
 "6_if/d_if.html",
 "6_if/e_if_true.html",
 "6_if/f_if_false.html",
 "6_if/h_resumen.html",
 "6_if/index.html",
 "6_if/print.html",
 "6_if/cmp/a-boolean.js",
 "6_if/cmp/b-txt-igualdad.js",
 "6_if/cmp/c-txt-diferente.js",
 "6_if/cmp/d-if.js",
 "6_if/cmp/e-if-true.js",
 "6_if/cmp/f-if-false.js",
 "6_if/cmp/h-resumen.js",
 "6_if/cmp/if-contenido.js",
 "6_if/cmp/if-index.js",
 "6_if/cmp/if-print.js",
 "6_if/g_if_programa/1_problema.html",
 "6_if/g_if_programa/2_escenarios.html",
 "6_if/g_if_programa/3_diseno.html",
 "6_if/g_if_programa/4_codigo.html",
 "6_if/g_if_programa/index.html",
 "6_if/g_if_programa/cmp/g-if-programa-contenido.js",
 "6_if/g_if_programa/cmp/g-if-programa-index.js",
 "6_if/g_if_programa/cmp/g1-problema.js",
 "6_if/g_if_programa/cmp/g2-escenarios.js",
 "6_if/g_if_programa/cmp/g3-diseno.js",
 "6_if/g_if_programa/cmp/g4-codigo.js",
 "6_if/img/if.svg",
 "6_if/src/1_op_igual.html",
 "6_if/src/2_op_diferente.html",
 "6_if/src/3_if_true.html",
 "6_if/src/4_if_false.html",
 "6_if/src/4_if_programa.html",
 "7_if_else/2_if_else_true.html",
 "7_if_else/3_if_else_false.html",
 "7_if_else/a_if_else.html",
 "7_if_else/b_codigo.html",
 "7_if_else/c_resumen.html",
 "7_if_else/index.html",
 "7_if_else/print.html",
 "7_if_else/4_if_else_programa/2_problema.html",
 "7_if_else/4_if_else_programa/3_escenarios.html",
 "7_if_else/4_if_else_programa/4_diseno.html",
 "7_if_else/4_if_else_programa/5_codigo.html",
 "7_if_else/4_if_else_programa/index.html",
 "7_if_else/cmp/a-if-else.js",
 "7_if_else/cmp/b-codigo-7.js",
 "7_if_else/cmp/c-resumen-7.js",
 "7_if_else/cmp/if-else-contenido.js",
 "7_if_else/cmp/if-else-index.js",
 "7_if_else/cmp/if-else-print.js",
 "7_if_else/img/if-else.svg",
 "7_if_else/src/1_if_else_true.html",
 "7_if_else/src/2_if_else.html",
 "7_if_else/src/2_if_else_false.html",
 "8_multiple/2_pres_m_1_true.html",
 "8_multiple/3_pres_m_2_true.html",
 "8_multiple/4_pres_m_false.html",
 "8_multiple/a_multiple.html",
 "8_multiple/b_codigo.html",
 "8_multiple/c_resumen.html",
 "8_multiple/index.html",
 "8_multiple/print.html",
 "8_multiple/5_m_prog/2_problema.html",
 "8_multiple/5_m_prog/3_escenarios.html",
 "8_multiple/5_m_prog/4_diseno.html",
 "8_multiple/5_m_prog/5_codigo.html",
 "8_multiple/5_m_prog/index.html",
 "8_multiple/cmp/a-multiple.js",
 "8_multiple/cmp/b-codigo-8.js",
 "8_multiple/cmp/c-resumen-8.js",
 "8_multiple/cmp/multiple-contenido.js",
 "8_multiple/cmp/multiple-index.js",
 "8_multiple/cmp/multiple-print.js",
 "8_multiple/img/condicional-multiple.svg",
 "8_multiple/src/1_m_1_true.html",
 "8_multiple/src/2_m_2_true.html",
 "8_multiple/src/3_m_false.html",
 "8_multiple/src/4_m_.html",
 "9_melse/2_pres_melse_1_true.html",
 "9_melse/3_pres_melse_2_true.html",
 "9_melse/4_pres_melse_false.html",
 "9_melse/a_melse.html",
 "9_melse/b_codigo.html",
 "9_melse/c_resumen.html",
 "9_melse/index.html",
 "9_melse/print.html",
 "9_melse/5_melse_prog/2_problema.html",
 "9_melse/5_melse_prog/3_escenarios.html",
 "9_melse/5_melse_prog/4_diseno.html",
 "9_melse/5_melse_prog/5_codigo.html",
 "9_melse/5_melse_prog/index.html",
 "9_melse/5_melse_prog/img/condicional-multiple-else.svg",
 "9_melse/cmp/a-multiple-else.js",
 "9_melse/cmp/b-codigo-9.js",
 "9_melse/cmp/c-resumen-9.js",
 "9_melse/cmp/multiple-else-contenido.js",
 "9_melse/cmp/multiple-else-index.js",
 "9_melse/cmp/multiple-else-print.js",
 "9_melse/img/condicional-multiple-else.svg",
 "9_melse/img/condicional-multiple.svg",
 "9_melse/src/1_melse_1_true.html",
 "9_melse/src/2_melse_2_true.html",
 "9_melse/src/3_melse_false.html",
 "9_melse/src/4_melse.html",
 "cmp/gilpgijs-index.js",
 "cmp/gilpgijs-print.js",
 "cmp/mi-nav.js",
 "css/estilos.css",
 "img/80x15.png",
 "img/icono1024.png",
 "img/icono2048.png",
 "img/icono256.png",
 "img/maskable_icon.png",
 "img/maskable_icon2730.png",
 "img/maskable_icon_x128.png",
 "img/maskable_icon_x192.png",
 "img/maskable_icon_x384.png",
 "img/maskable_icon_x48.png",
 "img/maskable_icon_x512.png",
 "img/maskable_icon_x72.png",
 "img/maskable_icon_x96.png",
 "js/config.js",
 "js/configCajon.js",
 "js/gilpgijsIndex.js",
 "js/gilpgijsPrint.js",
 "js/miNav.js",
 "lib/abreDetails.js",
 "lib/Diapositiva.js",
 "lib/INSTRUCCIONES_NAV.js",
 "lib/layout-cajon.js",
 "lib/layoutCajon.js",
 "lib/mi-footer.js",
 "lib/miFooter.js",
 "lib/muestra-codigo.js",
 "lib/muestra-codigo_shadow.js",
 "lib/utilHtml.js",
 "lib/css/cajon.css",
 "lib/css/miNav.css",
 "lib/css/prueba.css",
 "/"
]

self.addEventListener("install", evt => {
 console.log("Service Worker instalado.")
 // @ts-ignore
 evt.waitUntil(cargaCache());
})

self.addEventListener("fetch", evt => {
 // @ts-ignore
 if (evt.request.method === "GET") {
  // @ts-ignore
  evt.respondWith(usaCache(evt))
 }
});

self.addEventListener("activate", () => console.log("Service Worker activo."))

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
}

async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}