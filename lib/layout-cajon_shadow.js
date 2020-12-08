/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
 
export const ANCHO_SEPARADOR = 10;
export const SHADOW_HTML = /* html */
  `<style>
    :host {
      display: block;
    }
    #cortina {
      position: fixed;
      display: block;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transform: translateX(-150%);
      background-color: var(--color-fondo, white);
      opacity: 0;
      z-index: 1005;
      animation-duration: 6s;
      animation-name: desplaza;
    }
    #nav {
      position: fixed;
      z-index: 1002;
      top: 0;
      left: 0;
      bottom: 0;
      padding: var(--padding-mi-nav);
      box-sizing: border-box;
      color: var(--color-letra, black);
      overflow: auto;
    }
    #toolbar {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      z-index: 1000;
    }
    @media screen and (max-width: 999px) {
      #cierra {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--color-sombra);
        transform: translateX(-150%);
        transition: transform 0.7s ease-out;
        z-index: 1001;
      }
      #nav {
        width: min(var(--ancho-nav), 70%);
        background-color: var(--color-fondo-nav);
        box-shadow: 0.5rem 0 0.5rem var(--color-sombra);
        transform: translateX(-150%);
        transition: transform 0.7s ease-out;
      }
      :host(.abierto)>#nav,
      :host(.abierto)>#cierra {
        transform: translateX(0);
      }
      #nav header {
        display: flex;
        justify-content: flex-end;
      }
      #separador {
        display: none;
      }
      #principal {
        margin-left: 0 !important;
        box-sizing: border-box;
      }
    }
    @media screen and (min-width: 1000px) {
      #nav {
        width: var(--ancho-nav, 200px);
        box-sizing: border-box;
        background-color: var(--color-fondo, white);
      }
      #nav header, #abre {
        display: none;
      }
      #separador {
        cursor: col-resize;
        background-color: var(--color-fondo-divisor);
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='30'><path d='M2 0 v30 M5 0 v30 M8 0 v30' fill='none' stroke='black'/></svg>");
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        cursor: col-resize;
        position: fixed;
        top: 0;
        left: var(--ancho-nav, 200px);
        width: ${ANCHO_SEPARADOR}px;
        height: 100%;
        z-index: 1003;

        /* Evita que interfiera con drag & drop */
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      #separador.activo {
        background-color: var(--color-fondo-divisor-seleccionado);
      }
      #principal {
        box-sizing: border-box;
        margin-left: calc(var(--ancho-nav, 200px) + 10px);
      }
    }
    @keyframes desplaza {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(-150%);
      }
    }
  </style><div id=cortina></div><div id=cierra class=cierra></div><nav id=nav><header><button class=cierra>&#x2715;</button></header><slot id=slotNav name=nav></slot></nav><div id=separador></div><div id=principal><div id=toolbar><button id=abre type=button>&#x2630;</button><slot name=toolbar></slot></div><slot id=contenido></slot></div>`;