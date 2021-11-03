/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const LAYOUT_CAJON_SHADOW_HTML = /* html */
 `<style>
   :host {
    display: block;
   }
   #nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    overflow: auto;
    color: var(--colLetra, black);
    background-color: var(--colFondoNav);
    padding: var(--padMiNav);
    transition: transform 0.7s ease-in-out;
   }
   #nav>header {
    text-align: end
   }
   #nav>header>h1,
   #nav>header>h2 {
    text-align: start;
    font-family: var(--fontSans);
    color: var(--colTituloLetra);
    text-shadow: var(--colTituloShadow);
   }
   #principal {
    background-color: var(--colBk, white);
    transition: margin-left 0.7s ease-in-out;
   }
   .controles {
    display: flex;
    margin 1rem;
    gap: var(--gap);
   }
   .anterior,
   .siguiente {
    display: inline-block;
    text-decoration: none;
    padding: var(--padCtrl);
    border: var(--borderCtrl)
   }
   .anterior.bye,
   .siguiente.bye {
    display: none;
   }
   .siguiente {
    margin-left: auto
   }

   @media screen and (max-width: 999px) {
    #cierra {
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background-color: var(--colSombra);
     transform: translateX(-150%);
     transition: transform 0.7s ease-out;
    }
    :host>#nav {
     width: min(var(--anchoNav), 70%);
     box-shadow: var(--navSombra);
    }
    :host(.xmenu)>#nav {
     transform: translateX(-150%);
    }
    :host(.menu)>#nav,
    :host(.menu)>#cierra {
      transform: translateX(0);
    }
   }
   @media screen and (min-width: 1000px) {
    #cierra {
     display: none;
    }
    #nav {
     width: var(--anchoNav, 200px);
    }
    :host(.menu)>#nav {
     transform: translateX(-150%);
    }
    :host(.xmenu)>#principal {
     margin-left: calc(var(--anchoNav, 200px));
    }
    :host(.xmenu) #abre {
     display: none
    }
   }
   @media print {
    #nav,
    .controles {
     display: none;
    }
   }

   h1:not(.default),
h2:not(.default),
h3:not(.default) {
 font-family: var(--fontSans);
 color: var(--colTituloLetra);
 text-shadow: var(--colTituloShadow);
}

h1 strong,
mi-nav a strong {
 color: var(--colTituloStrong);
}

.autor {
 font-family: var(--fontSans);
 font-size: 1.5rem;
 color: var(--colTituloLetra);
}

@media screen and (max-width: 999px) {
 h1.sitio {
  font-size: 3rem;
 }

 h1.leccion {
  font-size: 2.5rem;
 }
}

@media screen and (min-width: 1000px) {
 h1.sitio {
  font-size: 9vh;
 }

 h1.leccion {
  font-size: 7vh;
 }
}

mi-nav {
 display: block;
}

mi-nav a {
 font-family: var(--fontSans);
}

mi-nav .actual h4 {
 font-style: oblique;
}

nav a.actual,
mi-nav a.actual {
 font-weight: bold;
 color: var(--colNavResaltada);
}

summary {
 margin-top: 1rem;
 margin-bottom: 1rem;
}

summary h4:not(.default) {
 display: inline;
 color: var(--colSummary);
 font-family: var(--fontSans);
}

mi-footer {
 margin-top: 1rem;
 padding-bottom: 2rem;
 display: block;
 text-align: center;
 font-family: var(--fontSans);
 font-size: small;
}

:host(:not(.pres)) #principal {
 opacity: 0;
 animation-timing-function: var(--introFuncion, ease-out);
 animation-duration: var(--introDuracion, 3s);
 animation-fill-mode: forwards;
 animation-name: desplaza;
}
@keyframes desplaza {
 from {
  opacity: 0;
 }
 to {
  opacity: 1;
 }
}

  </style>
  <div id=principal>
   <div class="controles">
    <button id="abre" type="button" title="Menú" class="cambiaMenú">
     &#x2630;
    </button>
    <a class="anterior bye" title="Página anterior">◀</a>
    <a class="siguiente bye" title="Página siguiente">▶</a>
   </div>
   <slot id=contenido></slot>
   <mi-footer></mi-footer>
  </div>
  <div id="cierra" class="cambiaMenú"></div>
  <nav id="nav">
   <header>
    <button type="button" title="Cierra" class="cambiaMenú">
     &#x2715;
    </button>
    <h2>Contenido</h2>
   </header>
   <mi-nav></mi-nav>
  </nav>`