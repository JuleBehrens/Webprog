"use strict";

/**
 * Klasse PageDetail: Stellt die Detailseite der App zur Verfügung
 */
let _apps;
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
        _apps = this;
        document.querySelector('#filter').addEventListener('click', function(event) {
            _filter();
        });
        document.querySelector('#filereinblenden').addEventListener('click', function() {
            let a = document.querySelectorAll('.bgscreen');
            a.forEach(b=>{
                if (b.classList.contains("bgscreen")) {
                    b.classList.remove("bgscreen");
                } else {
                    b.classList.add("bgscreen");
                }
            });
            if (event) {
                event.preventDefault();
            }
        });
    }
}

async function _filter() {
    let name = document.querySelector('#name').value;
    let marke = document.querySelector('#marke').value;
    let jahru = document.querySelector('#jahru').value;
    let jahro = document.querySelector('#jahro').value;
    let farbe = document.querySelector('#farbe').value;
    let psu = document.querySelector('#psu').value;
    let pso = document.querySelector('#pso').value;
    let preisu = document.querySelector('#preisu').value;
    let preiso = document.querySelector('#preiso').value;
    let auto = document.querySelector('#auto').checked;

    let html = await fetch("page-modelle/page-modelle.html");
    let css = await fetch("page-modelle/page-modelle.css");

    if (html.ok && css.ok) {
        html = await html.text();
        css = await css.text();
    } else {
        console.error("Fehler beim Laden des HTML/CSS-Inhalts");
        return;
    }

    let pageDom = document.createElement("div");

    pageDom.innerHTML = html;

    let mainElement = pageDom.querySelector("#h");
    let templateElement = pageDom.querySelector("#blank");

    let hallo = document.createElement("div");

    let modelleListe = await database.selectallmodelle();
    modelleListe.forEach(e => {
        if((auto === e.automatik || auto === false) &&(name === e.name || name === "") &&(marke === e.marke || marke === "") && (farbe === e.farbe || farbe === "") && (jahro >= e.baujahr || jahro === "") && (jahru <= e.baujahr || jahru === "")&& (preiso >= e.tagespreis || preiso === "") && (preisu <= e.tagespreis || preisu === "")&& (pso >= e.ps || pso === "") && (psu <= e.ps || psu === "")) {
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
        }
    });
    mainElement.innerHTML = mainElement.innerHTML.replace("{Modelle}",hallo.innerHTML);
    pageDom.querySelector("main").innerHTML += mainElement.innerHTML;
    _apps._app.setPageCss(css);
    _apps._app.setPageContent(pageDom.querySelector("main"));
    document.querySelector('#filter').addEventListener('click', function() {
        _filter();
    });

    document.querySelector('#name').value = name;
    document.querySelector('#marke').value= marke;
    document.querySelector('#jahru').value= jahru;
    document.querySelector('#jahro').value= jahro;
    document.querySelector('#farbe').value= farbe;
    document.querySelector('#psu').value= psu;
    document.querySelector('#pso').value= pso;
    document.querySelector('#preisu').value= preisu;
    document.querySelector('#preiso').value= preiso;
    document.querySelector('#auto').checked= auto;
}
