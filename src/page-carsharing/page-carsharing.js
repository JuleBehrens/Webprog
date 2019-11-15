"use strict";

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class PageCarsharing {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
     async show() {
         let html = await fetch("page-carsharing/page-carsharing.html");
         let css = await fetch("page-carsharing/page-carsharing.css");

         if (html.ok && css.ok) {
             html = await html.text();
             css = await css.text();
         } else {
             console.error("Fehler beim Laden des HTML/CSS-Inhalts");
             return;
         }

         // Seite zur Anzeige bringen
         let pageDom = document.createElement("div");
         html = html.replace("{tabelle}","");
         pageDom.innerHTML = html;


         this._app.setPageCss(css);

         this._app.setPageContent(pageDom.querySelector("main"));
         document.querySelector("#suchknopf").addEventListener("click", function(event){
           _suchen();
         });

     }
}
async function _suchen() {
  let html = await fetch("page-carsharing/page-carsharing.html");
  let css = await fetch("page-carsharing/page-carsharing.css");

  if (html.ok && css.ok) {
      html = await html.text();
      css = await css.text();
  } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
      return;
  }

  // Seite zur Anzeige bringen
  let pageDom = document.createElement("div");
  html = html.replace("{tabelle}","penis");
  pageDom.innerHTML = html;


  this._app.setPageCss(css);

  this._app.setPageContent(pageDom.querySelector("main"));
  document.querySelector("#suchknopf").addEventListener("click", function(event){
    _suchen();
  });

}
