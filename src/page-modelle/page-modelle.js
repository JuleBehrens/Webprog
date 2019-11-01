"use strict";

/**
 * Klasse PageDetail: Stellt die Detailseite der App zur Verfügung
 */

class PageModelle {
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
        let html = await fetch("page-modelle/page-modelle.html");
        let css = await fetch("page-modelle/page-modelle.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }

        //let modelleListe = await database.selectallmodelle();
        //let ol = document.createElement("ol");
        //modelleListe.forEach(s => {
            //let li=document.createElement("li");
            //let text = document.createTextNode(s.PLZ);
            //li.appendChild(text);
            //ol.appendChild(li);
    //    });
        //html = html.replace(/{Modelle}/g, ol.innerHTML);
        // Seite zur Anzeige bringen


        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        let mainElement = pageDom.querySelector("#h");
        let templateElement = pageDom.querySelector("#blank");

        let hallo = document.createElement("div");

        let modelleListe = await database.selectallmodelle();
        modelleListe.forEach(e => {
            let html = templateElement.innerHTML;
            html = html.replace("{SRC}", e.picsrc);
            html = html.replace("{Name}", e.name);
            html = html.replace("{Marke}", e.marke);
            html = html.replace("{Baujahr}", e.baujahr);
            html = html.replace("{Farbe}", e.farbe);
            html = html.replace("{PS}", e.ps);
            html = html.replace("{Preis}", e.tagespreis);
            if(e.automatik){
                html = html.replace("{Automatik}", "Automatik");
            }else {
                html = html.replace("{Automatik}", "Manuell");
            }
            hallo.innerHTML += html;
        });
        mainElement.innerHTML = mainElement.innerHTML.replace("{Modelle}",hallo.innerHTML);
        pageDom.querySelector("main").innerHTML += mainElement.innerHTML;
        this._app.setPageCss(css);
        this._app.setPageContent(pageDom.querySelector("main"));
    }
}
