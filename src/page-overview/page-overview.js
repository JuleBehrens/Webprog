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

    /** Steuerung der Slideshow
    carousel();
    var myIndex = 0;
    carousel() {
      let i;
      let x = document.getElementsByClassName("SlideshowElements");
      for (i = 0; i < x.length; i++) { x[i].style.display = "none";}
      myIndex++;
      if (myIndex > x.length) {myIndex = 1};
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 10000);
    }
    */

     /** Seite anzeigen. Wird von der App-Klasse aufgerufen. */
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
