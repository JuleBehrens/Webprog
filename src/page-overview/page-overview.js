"use strict";

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class PageOverview {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
    }

     /** Seite anzeigen wird von der AppKlasse aufgerufen */
     async show() {
         let html = await fetch("page-overview/page-overview.html");
         let css = await fetch("page-overview/page-overview.css");

         if (html.ok && css.ok) {
             html = await html.text();
             css = await css.text();
         } else {
             console.error("Fehler beim Laden des HTML/CSS-Inhalts");
             return;
         }

         // Seite zur Anzeige bringen
         let pageDom = document.createElement("div");
         pageDom.innerHTML = html;


         this._app.setPageCss(css);

         this._app.setPageContent(pageDom.querySelector("main"));

         //Slideshow
        carousel();
     }
}

var overview_Index = 0;
function carousel() {
  let i;
  let x = document.getElementsByClassName("SlideshowElements");
  for (i = 0; i < x.length; i++) { x[i].style.display = "none";}
  overview_Index++;
  if (overview_Index > x.length) {overview_Index = 1};
  x[overview_Index-1].style.display = "block";
  setTimeout(carousel, 6000);
}
