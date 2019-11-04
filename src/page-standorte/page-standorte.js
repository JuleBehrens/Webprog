"use strict";

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class PageStandorte {
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
         let html = await fetch("page-standorte/page-standorte.html");
         let css = await fetch("page-standorte/page-standorte.css");

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
         let hhcblks = pageDom.querySelector("#mapsStandort").innerHTML;
         pageDom.innerHTML=pageDom.innerHTML.replace("{mapsURL}", hhcblks);



         this._app.setPageCss(css);

         this._app.setPageContent(pageDom.querySelector("main"));
        document.querySelector("#karlsruheonclick").addEventListener("click", function(){karlsruhefunc();});
        document.querySelector("#muenchenonclick").addEventListener("click", function(){muenchenfunc();});
        document.querySelector("#landauonclick").addEventListener("click", function(){landaufunc();});
        document.querySelector("#saarbrueckenonclick").addEventListener("click", function(){saarbrueckenfunc();});
     }



}
// function dropFunction(){
//  document.getElementById("clickdropdown").addEventListener("click", dropFunction());
//  let dropclick = object.onclick = dropFunction(){
  //  object.addEventListener("click");
    //let mapsKA = "https://maps.google.de/maps?hl=de&q=%20Erzbergeerstraße%20Karlsruhe&t=&z=10&ie=utf8&iwloc=b&output=embed";
    //let mapsLD = "https://www.google.com/search?client=firefox-b-d&q=landau+maps#";
  //let mapsM = "https://www.google.de/maps/place/M%C3%BCnchen/";
  //  let mapsSA = "https://www.google.de/maps/place/Saarbr%C3%BCcken/";
// }
//}

async function karlsruhefunc() { // Declare a function

  let html = await fetch("page-standorte/page-standorte.html");
  let css = await fetch("page-standorte/page-standorte.css");

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
  let hhcblks = pageDom.querySelector("#mapsStandortKA").innerHTML;
  pageDom.innerHTML=pageDom.innerHTML.replace("{mapsURL}", hhcblks);


  this._app.setPageCss(css);

  this._app.setPageContent(pageDom.querySelector("main"));
    document.querySelector("#karlsruheonclick").addEventListener("click", function(){
      karlsruhefunc();
    });


}






async function muenchenfunc() { // Declare a function

  let html = await fetch("page-standorte/page-standorte.html");
  let css = await fetch("page-standorte/page-standorte.css");

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
  let hhcblks = pageDom.querySelector("#mapsStandortM").innerHTML;
  pageDom.innerHTML=pageDom.innerHTML.replace("{mapsURL}", hhcblks);


  this._app.setPageCss(css);

  this._app.setPageContent(pageDom.querySelector("main"));
    document.querySelector("#muenchenonclick").addEventListener("click", function(){muenchenfunc();});
}




async function landaufunc() { // Declare a function

  let html = await fetch("page-standorte/page-standorte.html");
  let css = await fetch("page-standorte/page-standorte.css");

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
  let hhcblks = pageDom.querySelector("#mapsStandortLD").innerHTML;
  pageDom.innerHTML=pageDom.innerHTML.replace("{mapsURL}", hhcblks);


  this._app.setPageCss(css);

  this._app.setPageContent(pageDom.querySelector("main"));
    document.querySelector("#landauonclick").addEventListener("click", function(){landaufunc();});
}





async function saarbrueckenfunc() { // Declare a function
  document.getElementById("saarbrueckenonclick").setID;

  let html = await fetch("page-standorte/page-standorte.html");
  let css = await fetch("page-standorte/page-standorte.css");

  if (html.ok && css.ok) {
      html = await html.text();
      css = await css.text();
  } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
      return;
  }

  // Seite zur Anzeige bringen
  let pageDom = document.createElement("div");
  html.replace("mapsURL", "https://www.google.de/maps/place/Saarbr%C3%BCcken/");
  pageDom.innerHTML = html;
  let hhcblks = pageDom.querySelector("#mapsStandortSA").innerHTML;
  pageDom.innerHTML=pageDom.innerHTML.replace("{mapsURL}", hhcblks);


  this._app.setPageCss(css);

  this._app.setPageContent(pageDom.querySelector("main"));
    document.querySelector("#saarbrueckenonclick").addEventListener("click", function(){saarbrueckenfunc();});
}
