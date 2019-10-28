"use strict";

/**
 * Klasse Database: Kümmert sich um die Datenhaltung der App
 *
 * Diese Klasse beinhaltet alle Datensätze der App. Entgegen dem Namen handelt
 * es sich nicht wirklich um eine Datenbank, da sie lediglich ein paar statische
 * Testdaten enthält. Ausgefeilte Methoden zum Durchsuchen, Ändern oder Löschen
 * der Daten fehlen komplett, könnten aber in einer echten Anwendung relativ
 * einfach hinzugefügt werden.
 */
class Database {
    /**
     * Konstruktor.
     */
    constructor() {
      // Diese Informationen müssen aus der Firebase-Konsole ermittelt
      // werden, indem dort ein neues Projekt mit einer neuen Datenbank
      // angelegt und diese dann mit einer neuen App verknüpft wird.
      try {
        firebase.initializeApp({
          apiKey: "AIzaSyAH-CKKLzp_JbF2MS5Kjn_nNPnkcGBhnXk",
          authDomain: "carformance.firebaseapp.com",
          databaseURL: "https://carformance.firebaseio.com",
          projectId: "carformance",
          storageBucket: "carformance.appspot.com",
          messagingSenderId: "1032632808382",
          appId: "1:1032632808382:web:38f0c5389f61270963bfef",
          measurementId: "G-6LT1NDFN8P"
        });
      } catch (e) {

      }

      //   firebase.analytics();
      // Dieses Objekt dient dem eigentlichen Datenbankzugriff.
      // Dabei können beliebig viele "Collections" angesprochen werden,
      // die in etwa den Tabellen einer klassischen Datenbank entsprechen.
      this._db = firebase.firestore();
      this._standorte = this._db.collection("standorte");
    }
    async selectallstandorte(){
      let result = await this._standorte.orderBy("PLZ").get();
      let standorte = [];
      result.forEach(entry => {
        let standort = entry.data();
        standorte.push(standort);
      });
      return standorte;
    }
}
