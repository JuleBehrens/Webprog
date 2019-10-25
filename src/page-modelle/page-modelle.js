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
    async show(matches) {
        let html = await fetch("page-modelle/page-modelle.html");
        let css = await fetch("page-modelle/page-modelle.css");

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
    }
}
