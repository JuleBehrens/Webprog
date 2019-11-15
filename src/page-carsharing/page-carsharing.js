"use strict";

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
 let _jule;
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
         document.querySelector("#anbietenknopf").addEventListener("click", function(event){
           _anbieten();
         });
         _jule = this;
     }
}

async function _anbieten() {
  let start = document.querySelector("#start").value;
  let ende = document.querySelector("#ende").value;
  let datum = document.querySelector("#datum").value;
  let uhrzeit = document.querySelector("#uhrzeit").value;
  let kontakt = document.querySelector("#kontakt").value;

  let saved = await database.savefahrt(start, ende, datum, uhrzeit, kontakt);
  if(saved){
    alert("saved");
  }else{
    alert("unsaved");
  }
}

async function _suchen() {
  let startsuche = document.querySelector("#startsuche").value;
  let zielsuche = document.querySelector("#zielsuche").value;

  let html = await fetch("page-carsharing/page-carsharing.html");
  let css = await fetch("page-carsharing/page-carsharing.css");

  if (html.ok && css.ok) {
      html = await html.text();
      css = await css.text();
  } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
      return;
  }

let site = document.createElement("div");
site.innerHTML = html;

let tab = site.querySelector('#tabelle');
let zeile = site.querySelector("#platzhalter");
let allezeilen = "";

  let fahrtenliste = await database.selectallcarsharing();
  fahrtenliste.forEach(fahrt =>{
    if(startsuche === fahrt.startort && document.querySelector("#zielsuche").value === fahrt.zielort){
      let z = zeile.innerHTML;
      z = z.replace("{datum}", fahrt.datum);
      z = z.replace("{uhrzeit}", fahrt.uhrzeit);
      z = z.replace("{kontakt}", fahrt.kontakt);
      z = z.replace("<table>", "");
      z = z.replace("<tbody>", "");
      z = z.replace("</tbody>", "");
      z = z.replace("</table>", "");
      allezeilen += z;
  }})

tab.innerHTML = tab.innerHTML.replace("<td></td>", allezeilen);
  // Seite zur Anzeige bringen


  let pageDom = document.createElement("div");
  html = html.replace("{tabelle}",tab.innerHTML);
  pageDom.innerHTML = html;


  _jule._app.setPageCss(css);

  _jule._app.setPageContent(pageDom.querySelector("main"));
  document.querySelector("#suchknopf").addEventListener("click", function(event){
    _suchen();
  });
  document.querySelector("#anbietenknopf").addEventListener("click", function(event){
    _anbieten();
  });
document.querySelector("#startsuche").value = startsuche;
document.querySelector("#zielsuche").value = zielsuche;
}
