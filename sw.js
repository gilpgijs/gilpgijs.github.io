/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "gilpgijs"
const VERSION = "2.60.14"

/** Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
 "favicon.ico",
 "index.html",
 "LICENSE",
 "print.html",
 "site.webmanifest",
 "10_multiple/2_pres_m_1_true.html",
 "10_multiple/3_pres_m_2_true.html",
 "10_multiple/4_pres_m_false.html",
 "10_multiple/a_multiple.html",
 "10_multiple/b_codigo.html",
 "10_multiple/c_resumen.html",
 "10_multiple/index.html",
 "10_multiple/print.html",
 "10_multiple/5_m_prog/2_problema.html",
 "10_multiple/5_m_prog/3_escenarios.html",
 "10_multiple/5_m_prog/4_diseno.html",
 "10_multiple/5_m_prog/5_codigo.html",
 "10_multiple/5_m_prog/index.html",
 "10_multiple/cmp/a-multiple.js",
 "10_multiple/cmp/b-codigo-8.js",
 "10_multiple/cmp/c-resumen-8.js",
 "10_multiple/cmp/multiple-contenido.js",
 "10_multiple/cmp/multiple-index.js",
 "10_multiple/cmp/multiple-print.js",
 "10_multiple/img/condicional-multiple.svg",
 "10_multiple/src/1_m_1_true.html",
 "10_multiple/src/2_m_2_true.html",
 "10_multiple/src/3_m_false.html",
 "10_multiple/src/4_m_.html",
 "11_melse/2_pres_melse_1_true.html",
 "11_melse/3_pres_melse_2_true.html",
 "11_melse/4_pres_melse_false.html",
 "11_melse/a_melse.html",
 "11_melse/b_codigo.html",
 "11_melse/c_resumen.html",
 "11_melse/index.html",
 "11_melse/print.html",
 "11_melse/5_melse_prog/2_problema.html",
 "11_melse/5_melse_prog/3_escenarios.html",
 "11_melse/5_melse_prog/4_diseno.html",
 "11_melse/5_melse_prog/5_codigo.html",
 "11_melse/5_melse_prog/index.html",
 "11_melse/5_melse_prog/img/condicional-multiple-else.svg",
 "11_melse/cmp/a-multiple-else.js",
 "11_melse/cmp/b-codigo-9.js",
 "11_melse/cmp/c-resumen-9.js",
 "11_melse/cmp/multiple-else-contenido.js",
 "11_melse/cmp/multiple-else-index.js",
 "11_melse/cmp/multiple-else-print.js",
 "11_melse/img/condicional-multiple-else.svg",
 "11_melse/img/condicional-multiple.svg",
 "11_melse/src/1_melse_1_true.html",
 "11_melse/src/2_melse_2_true.html",
 "11_melse/src/3_melse_false.html",
 "11_melse/src/4_melse.html",
 "12_textos/a_number.html",
 "12_textos/b_concatenacion.html",
 "12_textos/c_asignacion.html",
 "12_textos/d_plantillas.html",
 "12_textos/e_orden.html",
 "12_textos/f_orden_igualdad.html",
 "12_textos/g_resumen.html",
 "12_textos/index.html",
 "12_textos/print.html",
 "12_textos/cmp/a-number.js",
 "12_textos/cmp/b-concatenacion.js",
 "12_textos/cmp/c-asignacion-10.js",
 "12_textos/cmp/d-plantillas.js",
 "12_textos/cmp/e-orden-10.js",
 "12_textos/cmp/f-orden-igualdad.js",
 "12_textos/cmp/g-resumen-10.js",
 "12_textos/cmp/textos-contenido.js",
 "12_textos/cmp/textos-index.js",
 "12_textos/cmp/textos-print.js",
 "12_textos/src/1_concatenacion.html",
 "12_textos/src/2_asignacion.html",
 "12_textos/src/3_plantillas.html",
 "12_textos/src/4_ops_orden.html",
 "12_textos/src/5_ops_orden_igualdad.html",
 "13_logicos/a_op_y.html",
 "13_logicos/b_op_o.html",
 "13_logicos/c_op_no.html",
 "13_logicos/d_op_ternario.html",
 "13_logicos/e_resumen.html",
 "13_logicos/index.html",
 "13_logicos/print.html",
 "13_logicos/cmp/a-op-y.js",
 "13_logicos/cmp/b-op-o.js",
 "13_logicos/cmp/c-op-no.js",
 "13_logicos/cmp/d-op-ternario.js",
 "13_logicos/cmp/e-resumen-11.js",
 "13_logicos/cmp/logicos-contenido.js",
 "13_logicos/cmp/logicos-index.js",
 "13_logicos/cmp/logicos-print.js",
 "13_logicos/src/1_op_y.html",
 "13_logicos/src/2_op_o.html",
 "13_logicos/src/3_op_no.html",
 "13_logicos/src/4_op_ternario.html",
 "14_do_while/a_do_while.html",
 "14_do_while/b_codigo.html",
 "14_do_while/c_resumen.html",
 "14_do_while/index.html",
 "14_do_while/print.html",
 "14_do_while/3_do_while_prog/2_problema.html",
 "14_do_while/3_do_while_prog/3_escenarios.html",
 "14_do_while/3_do_while_prog/4_diseno.html",
 "14_do_while/3_do_while_prog/5_codigo.html",
 "14_do_while/3_do_while_prog/index.html",
 "14_do_while/cmp/a-do-while.js",
 "14_do_while/cmp/b-codigo-12.js",
 "14_do_while/cmp/c-resumen-12.js",
 "14_do_while/cmp/do-while-contenido.js",
 "14_do_while/cmp/do-while-index.js",
 "14_do_while/cmp/do-while-print.js",
 "14_do_while/img/do-while.png",
 "14_do_while/img/do-while.svg",
 "14_do_while/src/1_do_while.html",
 "14_do_while/src/2_do_while_prog.html",
 "15_numeros/a_naturales.html",
 "15_numeros/b_cero.html",
 "15_numeros/c_suma.html",
 "15_numeros/d_multiplicacion.html",
 "15_numeros/e_enteros.html",
 "15_numeros/f_racionales.html",
 "15_numeros/g_irracionales.html",
 "15_numeros/h_rarezas.html",
 "15_numeros/index.html",
 "15_numeros/i_godel.html",
 "15_numeros/j_resumen.html",
 "15_numeros/print.html",
 "15_numeros/cmp/a-naturales.js",
 "15_numeros/cmp/b-cero.js",
 "15_numeros/cmp/c-suma.js",
 "15_numeros/cmp/d-multiplicacion.js",
 "15_numeros/cmp/e-enteros.js",
 "15_numeros/cmp/f-racionales.js",
 "15_numeros/cmp/g-irracionales.js",
 "15_numeros/cmp/h-rarezas.js",
 "15_numeros/cmp/i-godel.js",
 "15_numeros/cmp/j-resumen-13.js",
 "15_numeros/cmp/numeros-contenido.js",
 "15_numeros/cmp/numeros-index.js",
 "15_numeros/cmp/numeros-print.js",
 "15_numeros/img/480px-India_(orthographic_projection).svg.png",
 "15_numeros/img/571px-Kurt-godel1.jpg",
 "15_numeros/img/figura-1.-rectc3a1ngulos-inscritos.webp",
 "15_numeros/img/octogono-irregular-area.jpg",
 "15_numeros/img/pexels-tara-winstead-6692937.jpg",
 "15_numeros/img/pexels-yan-krukov-8613095.jpg",
 "15_numeros/img/Pythagorean_right_angle.svg",
 "16_mas_numeros/a_recta.html",
 "16_mas_numeros/b_ops_num.html",
 "16_mas_numeros/c_asignacion.html",
 "16_mas_numeros/d_incr_y_decr.html",
 "16_mas_numeros/e_igualdad.html",
 "16_mas_numeros/f_orden.html",
 "16_mas_numeros/g_orden_igualdad.html",
 "16_mas_numeros/h_precedencia.html",
 "16_mas_numeros/index.html",
 "16_mas_numeros/i_expresiones.html",
 "16_mas_numeros/j_resumen.html",
 "16_mas_numeros/print.html",
 "16_mas_numeros/cmp/a-recta.js",
 "16_mas_numeros/cmp/b-ops-num.js",
 "16_mas_numeros/cmp/c-asignacion.js",
 "16_mas_numeros/cmp/d-incr-y-decr.js",
 "16_mas_numeros/cmp/e-igualdad.js",
 "16_mas_numeros/cmp/f-orden-14.js",
 "16_mas_numeros/cmp/g-orden-igualdad.js",
 "16_mas_numeros/cmp/h-precedencia.js",
 "16_mas_numeros/cmp/i-expresiones.js",
 "16_mas_numeros/cmp/j-resumen-14.js",
 "16_mas_numeros/cmp/mas-numeros-contenido.js",
 "16_mas_numeros/cmp/mas-numeros-index.js",
 "16_mas_numeros/cmp/mas-numeros-print.js",
 "16_mas_numeros/img/cuadratica.png",
 "16_mas_numeros/img/recta.png",
 "16_mas_numeros/img/recta.svg",
 "16_mas_numeros/src/1_ops_num.html",
 "16_mas_numeros/src/2_asignacion.html",
 "16_mas_numeros/src/3_incr_y_decr.html",
 "16_mas_numeros/src/4_op_igual.html",
 "16_mas_numeros/src/5_orden.html",
 "16_mas_numeros/src/6_op_orden_igual.html",
 "17_while/a_while.html",
 "17_while/b_pres_while_asc.html",
 "17_while/c_pres_while_asc_2.html",
 "17_while/d_pres_while_desc.html",
 "17_while/e_pres_while_desc_2.html",
 "17_while/f_pres_while_no_ejec.html",
 "17_while/g_pres_while_desc_mal.html",
 "17_while/h_pres_while_asc_mal.html",
 "17_while/index.html",
 "17_while/i_resumen.html",
 "17_while/print.html",
 "17_while/cmp/a-15-while.js",
 "17_while/cmp/b-15-pres-while-asc.js",
 "17_while/cmp/c-15-pres-while-asc-2.js",
 "17_while/cmp/d-15-pres-while-desc.js",
 "17_while/cmp/e-15-pres-while-desc-2.js",
 "17_while/cmp/f-15-pres-while-no-ejec.js",
 "17_while/cmp/g-15-pres-while-desc-mal.js",
 "17_while/cmp/h-15-pres-while-asc-mal.js",
 "17_while/cmp/i-15-resumen.js",
 "17_while/cmp/while-contenido.js",
 "17_while/cmp/while-index.js",
 "17_while/cmp/while-print.js",
 "17_while/img/while.svg",
 "17_while/src/1_while_asc.html",
 "17_while/src/2_while_asc_2.html",
 "17_while/src/3_while_desc.html",
 "17_while/src/4_while_desc_2.html",
 "17_while/src/5_while_no_ej.html",
 "17_while/src/6_while_desc_mal.html",
 "17_while/src/7_while_asc_mal.html",
 "18_for/a_for.html",
 "18_for/b_pres_for.html",
 "18_for/c_resumen.html",
 "18_for/index.html",
 "18_for/print.html",
 "18_for/3_for_prog/2_problema.html",
 "18_for/3_for_prog/3_escenarios.html",
 "18_for/3_for_prog/4_diseno.html",
 "18_for/3_for_prog/5_codigo.html",
 "18_for/3_for_prog/index.html",
 "18_for/cmp/a-16-for.js",
 "18_for/cmp/b-16-codigo.js",
 "18_for/cmp/c-16-resumen.js",
 "18_for/cmp/for-contenido.js",
 "18_for/cmp/for-index.js",
 "18_for/cmp/for-print.js",
 "18_for/img/for.svg",
 "18_for/src/1_for_asc.html",
 "19_switch/a_switch.html",
 "19_switch/b_codigo_switch.html",
 "19_switch/c_switch_default.html",
 "19_switch/d_codigo_switch_default.html",
 "19_switch/e_resumen.html",
 "19_switch/index.html",
 "19_switch/print.html",
 "19_switch/cmp/a-17-switch.js",
 "19_switch/cmp/b-17-codigo-switch.js",
 "19_switch/cmp/c-17-switch-default.js",
 "19_switch/cmp/d-17-codigo-switch-default.js",
 "19_switch/cmp/e-17-resumen.js",
 "19_switch/cmp/switch-contenido.js",
 "19_switch/cmp/switch-index.js",
 "19_switch/cmp/switch-print.js",
 "19_switch/img/switch-default.svg",
 "19_switch/img/switch.svg",
 "19_switch/src/1_switch.html",
 "19_switch/src/2_switch_default.html",
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
 "1_fundamentos/b_dispositivos/js/miNav.js",
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
 "1_fundamentos/e_operativos/js/miNav.js",
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
 "1_fundamentos/f_programas/js/miNav.js",
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
 "1_fundamentos/img/winword.webp",
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
 "2_conceptos/b_motherboard.html",
 "2_conceptos/c_memoria.html",
 "2_conceptos/d_cpu.html",
 "2_conceptos/e_entrada.html",
 "2_conceptos/f_salida.html",
 "2_conceptos/g_entrada_salida.html",
 "2_conceptos/h_js.html",
 "2_conceptos/index.html",
 "2_conceptos/i_textos.html",
 "2_conceptos/j_string.html",
 "2_conceptos/k_log.html",
 "2_conceptos/l_orden.html",
 "2_conceptos/m_resumen.html",
 "2_conceptos/print.html",
 "2_conceptos/img/Cadena.svg",
 "2_conceptos/img/Eslabon.svg",
 "2_conceptos/img/pexels-lex-photography-1109543.webp",
 "2_conceptos/img/pexels-marek-levak-2265482.webp",
 "2_conceptos/img/pexels-pok-rie-1432673.webp",
 "2_conceptos/img/pexels-rfstudio-3825581.webp",
 "2_conceptos/img/pexels-tranmautritam-326514.webp",
 "2_conceptos/img/pexels-valentine-tanasovich-2588757.webp",
 "2_conceptos/img/winlogo.png",
 "2_conceptos/img/winlogo.xcf",
 "2_conceptos/js/conceptosContenido.js",
 "2_conceptos/js/conceptosIndex.js",
 "2_conceptos/js/conceptosPrint.js",
 "2_conceptos/js/d2aAlgoritmo.js",
 "2_conceptos/js/d2bMotherboard.js",
 "2_conceptos/js/d2cMemoria.js",
 "2_conceptos/js/d2dCPU.js",
 "2_conceptos/js/d2eEntrada.js",
 "2_conceptos/js/d2fSalida.js",
 "2_conceptos/js/d2gEntradaSalida.js",
 "2_conceptos/js/d2hjs.js",
 "2_conceptos/js/d2iTextos.js",
 "2_conceptos/js/d2jString.js",
 "2_conceptos/js/d2klog.js",
 "2_conceptos/js/d2lOrden.js",
 "2_conceptos/js/d2mResumen.js",
 "2_conceptos/js/miNav.js",
 "3_pres/1.html",
 "3_pres/2.html",
 "3_pres/3.html",
 "3_pres/index.html",
 "3_pres/print.html",
 "3_pres/js/d3_1.js",
 "3_pres/js/d3_2.js",
 "3_pres/js/d3_3.js",
 "3_pres/js/miNav.js",
 "3_pres/js/presContenido.js",
 "3_pres/js/presIndex.js",
 "3_pres/js/presPrint.js",
 "4_adicionales/a_depuracion.html",
 "4_adicionales/b_pseudocodigo.html",
 "4_adicionales/c_diagramas.html",
 "4_adicionales/d_pseint.html",
 "4_adicionales/e_resumen.html",
 "4_adicionales/index.html",
 "4_adicionales/print.html",
 "4_adicionales/img/Ejemplo.webp",
 "4_adicionales/js/adicionalesContenido.js",
 "4_adicionales/js/adicionalesIndex.js",
 "4_adicionales/js/adicionalesPrint.js",
 "4_adicionales/js/d4aDepuracion.js",
 "4_adicionales/js/d4bPseudocodigo.js",
 "4_adicionales/js/d4cDiagrama.js",
 "4_adicionales/js/d4dPSeInt.js",
 "4_adicionales/js/d4eResumen.js",
 "4_adicionales/js/miNav.js",
 "4_adicionales/src/1_orden.html",
 "5_variables/a_identificador.html",
 "5_variables/b_variable.html",
 "5_variables/d_constantes.html",
 "5_variables/e_duplicadas.html",
 "5_variables/f_no_encontradas.html",
 "5_variables/g_prompt.html",
 "5_variables/h_proceso.html",
 "5_variables/index.html",
 "5_variables/i_resumen.html",
 "5_variables/print.html",
 "5_variables/cmp/a-identificadores.js",
 "5_variables/cmp/b-proceso-1.js",
 "5_variables/cmp/b-variables.js",
 "5_variables/cmp/c-constantes.js",
 "5_variables/cmp/d-duplicadas.js",
 "5_variables/cmp/e-no-encontradas.js",
 "5_variables/cmp/f-prompt.js",
 "5_variables/cmp/g-resumen-3.js",
 "5_variables/c_pres_var/1.html",
 "5_variables/c_pres_var/2.html",
 "5_variables/c_pres_var/3.html",
 "5_variables/c_pres_var/4.html",
 "5_variables/c_pres_var/5.html",
 "5_variables/c_pres_var/6.html",
 "5_variables/c_pres_var/7.html",
 "5_variables/c_pres_var/8.html",
 "5_variables/c_pres_var/9.html",
 "5_variables/c_pres_var/index.html",
 "5_variables/c_pres_var/js/d5c1.js",
 "5_variables/c_pres_var/js/d5c2.js",
 "5_variables/c_pres_var/js/d5c3.js",
 "5_variables/c_pres_var/js/d5c4.js",
 "5_variables/c_pres_var/js/d5c5.js",
 "5_variables/c_pres_var/js/d5c6.js",
 "5_variables/c_pres_var/js/d5c7.js",
 "5_variables/c_pres_var/js/d5c8.js",
 "5_variables/c_pres_var/js/d5c9.js",
 "5_variables/c_pres_var/js/d5cPresVarContenido.js",
 "5_variables/c_pres_var/js/d5cPresVarIndex.js",
 "5_variables/c_pres_var/js/d5cPresVarPrint.js",
 "5_variables/c_pres_var/js/miNav.js",
 "5_variables/js/miNav.js",
 "5_variables/js/variablesContenido.js",
 "5_variables/js/variablesIndex.js",
 "5_variables/js/variablesPrint.js",
 "5_variables/src/1_variables.html",
 "5_variables/src/2_constantes.html",
 "5_variables/src/3_duplicados.html",
 "5_variables/src/4_no_definida.html",
 "5_variables/src/5_prompt.html",
 "6_comentarios/a_comentarios.html",
 "6_comentarios/b_com_1.html",
 "6_comentarios/c_com_1_o_mas.html",
 "6_comentarios/d_JsDoc.html",
 "6_comentarios/e_resumen.html",
 "6_comentarios/index.html",
 "6_comentarios/print.html",
 "6_comentarios/8_pres_com_1/1.html",
 "6_comentarios/8_pres_com_1/2.html",
 "6_comentarios/8_pres_com_1/index.html",
 "6_comentarios/9_pres_1_o_mas/1.html",
 "6_comentarios/9_pres_1_o_mas/2.html",
 "6_comentarios/9_pres_1_o_mas/3.html",
 "6_comentarios/9_pres_1_o_mas/index.html",
 "6_comentarios/cmp/a-comentarios.js",
 "6_comentarios/cmp/b-com-1.js",
 "6_comentarios/cmp/c-com-1-o-mas.js",
 "6_comentarios/cmp/comentarios-contenido.js",
 "6_comentarios/cmp/comentarios-index.js",
 "6_comentarios/cmp/comentarios-print.js",
 "6_comentarios/cmp/d-jsdoc.js",
 "6_comentarios/cmp/e-resumen-4.js",
 "6_comentarios/src/1_comentarios_una.html",
 "6_comentarios/src/2_comentarios_una_o_mas.html",
 "6_comentarios/src/3_JsDoc.html",
 "7_bloques/a_bloques.html",
 "7_bloques/b_pres_bloque.html",
 "7_bloques/c_pres_bloque_v_d.html",
 "7_bloques/d_resumen.html",
 "7_bloques/index.html",
 "7_bloques/print.html",
 "7_bloques/cmp/a-bloques.js",
 "7_bloques/cmp/b-pres-bloque.js",
 "7_bloques/cmp/bloques-contenido.js",
 "7_bloques/cmp/bloques-index.js",
 "7_bloques/cmp/bloques-print.js",
 "7_bloques/cmp/c-pres-bloque-v-d.js",
 "7_bloques/cmp/d-resumen.js",
 "7_bloques/src/1_bloques.html",
 "7_bloques/src/2_dup_blk.html",
 "8_if/a_boolean.html",
 "8_if/b_txt_igualdad.html",
 "8_if/c_txt_diferente.html",
 "8_if/d_if.html",
 "8_if/e_if_true.html",
 "8_if/f_if_false.html",
 "8_if/h_resumen.html",
 "8_if/index.html",
 "8_if/print.html",
 "8_if/cmp/a-boolean.js",
 "8_if/cmp/b-txt-igualdad.js",
 "8_if/cmp/c-txt-diferente.js",
 "8_if/cmp/d-if.js",
 "8_if/cmp/e-if-true.js",
 "8_if/cmp/f-if-false.js",
 "8_if/cmp/h-resumen.js",
 "8_if/cmp/if-contenido.js",
 "8_if/cmp/if-index.js",
 "8_if/cmp/if-print.js",
 "8_if/g_if_programa/1_problema.html",
 "8_if/g_if_programa/2_escenarios.html",
 "8_if/g_if_programa/3_diseno.html",
 "8_if/g_if_programa/4_codigo.html",
 "8_if/g_if_programa/index.html",
 "8_if/g_if_programa/cmp/g-if-programa-contenido.js",
 "8_if/g_if_programa/cmp/g-if-programa-index.js",
 "8_if/g_if_programa/cmp/g1-problema.js",
 "8_if/g_if_programa/cmp/g2-escenarios.js",
 "8_if/g_if_programa/cmp/g3-diseno.js",
 "8_if/g_if_programa/cmp/g4-codigo.js",
 "8_if/img/if.svg",
 "8_if/src/1_op_igual.html",
 "8_if/src/2_op_diferente.html",
 "8_if/src/3_if_true.html",
 "8_if/src/4_if_false.html",
 "8_if/src/4_if_programa.html",
 "9_if_else/2_if_else_true.html",
 "9_if_else/3_if_else_false.html",
 "9_if_else/a_if_else.html",
 "9_if_else/b_codigo.html",
 "9_if_else/c_resumen.html",
 "9_if_else/index.html",
 "9_if_else/print.html",
 "9_if_else/4_if_else_programa/2_problema.html",
 "9_if_else/4_if_else_programa/3_escenarios.html",
 "9_if_else/4_if_else_programa/4_diseno.html",
 "9_if_else/4_if_else_programa/5_codigo.html",
 "9_if_else/4_if_else_programa/index.html",
 "9_if_else/cmp/a-if-else.js",
 "9_if_else/cmp/b-codigo-7.js",
 "9_if_else/cmp/c-resumen-7.js",
 "9_if_else/cmp/if-else-contenido.js",
 "9_if_else/cmp/if-else-index.js",
 "9_if_else/cmp/if-else-print.js",
 "9_if_else/img/if-else.svg",
 "9_if_else/src/1_if_else_true.html",
 "9_if_else/src/2_if_else.html",
 "9_if_else/src/2_if_else_false.html",
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
 "lib/Diapositiva.js",
 "lib/INSTRUCCIONES_NAV.js",
 "lib/layout-cajon.js",
 "lib/layoutCajon.js",
 "lib/mi-footer.js",
 "lib/miFooter.js",
 "lib/muestra-codigo.js",
 "lib/utilHtml.js",
 "lib/css/cajon.css",
 "lib/css/pres.css",
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
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
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