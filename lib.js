
  

"use strict";

/**addHandler()**********************************************************************************************************************
 * Fügt einem ausgewählten Element einen Eventhandler mit der Variante "addEventListener" mit einem bestimmten Funktionsaufruf hinzu
 * @param {object} el [Das Element, welches den Eventhandler zugewiesen bekommen soll]
 * @param {string} ev [Das Event, welches zugewiesen werden soll, in Form eines Strings (z.B. "click", "mouseover", ...)]
 * @param {function} fn [Die Funktion, welche durch den Eventhandler aufgerufen werden soll]
************************************************************************************************************************************/
function addHandler(el,ev,fn){
    el.addEventListener(ev, fn);
}


/**ajaxGet()**********************************************************************************************************************
 * [Führt eine AJAX Anfrage durch]
 * @param {string} file [Ein Zeichenkette, die den Dateipfad enthält, welcher referiert werden soll]
 * @param {function} fn [Eine Funktion mit einem Parameter, an den der abzufragende responseText übergeben wird]
************************************************************************************************************************************/
function ajaxGet(file, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            fn(xhr.responseText);
        }
    };
    xhr.send();
}


/**capitalize()**********************************************************************************************************************
 * [Nimmt einen String auseinander und ersetzt den ersten Buchstaben durch den entsprechenden Großbuchstaben]
 * @param {string} s [Ein Zeichenkette, welche mit vorangehendem Großbuchstaben geschrieben werden soll]
 * @return {string} Neu zusammengesetzter String mit dem ersten Buchstaben groß geschrieben
************************************************************************************************************************************/
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}


/**isChecked()**********************************************************************************************************************
 * [Prüft Checkboxen/Radiobuttons sie gecheckt wurden. Auch geeignet für HTMLCollections und Arrays]
 * @param {object} a [Eine HTMLCollection, ein Array oder Radionodelist. Auch nutzbar für einzelne Checkboxen/Radiobuttons]
 * @return {boolean} Wahrheitswert, ob geprüftes object gechecked wurde oder nicht
************************************************************************************************************************************/
function isChecked(a) {
    if(a.length !== undefined) {
        for(var i = 0; i < a.length; i++) {
            if(a[i].checked) {
                return true;
            }
        }
        return false;
    } else {
        return a.checked;
    }    
}


/**myIndexOf()***********************************************************************************************************************
 * [Findet den ersten Index des Suchwerts in einem Array]
 * @param {array} array     [haystack - Array in dem gesucht werden soll]
 * @param {mixed} search    [needle - Was in den Arrayindizes gesucht werden soll]
 * @param {number} pos      [offset - Optionaler Parameter mit dem die Startposition angegeben wird. Normalerweise beginnt die Suche                            auf Position 0 / Index 0]
 * @return {number}
************************************************************************************************************************************/
function myIndexOf(array, search, pos) {
    if (pos === undefined) {
        pos = 0;
    }
    for (var i = pos; i < array.length; i++) {
        if (array[i] === search) {
            return i; 
        }
    }
    return -1;
}


/**rand()****************************************************************************************************************************
 * [Erzeugt eine zufällige Ganzzahl von min bis max (inklusive)]
 * @param {number} min [Ganzzahl Untergrenze für Zufallszahl]
 * @param {number} max [Ganzzahl Obergrenze für Zufallszahl]
 * @return {number} Ganzzahl [min max]  -   min >= wert <= max
************************************************************************************************************************************/
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**randomRGB()***********************************************************************************************************************
 * [Erzeugt einen zufälligen Farbwert, basierenf auf RGB-Werten]
 * @return {string} Ein String bestehend aus drei Zahl von 0 - 255 um einen RGB-Farbwert zu erstellen auf Basis der Funktion rand()
************************************************************************************************************************************/
function randomRGB() {
    return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")"
}


/**ajaxGetXML()**********************************************************************************************************************
 * [Führt eine AJAX Anfrage an ein XML-Dokument durch]
 * @param {string} file [Ein Zeichenkette, die den Dateipfad enthält, welcher referiert werden soll]
 * @param {function} fn [Eine Funktion mit einem Parameter, an den das abzufragende responseXML übergeben wird]
************************************************************************************************************************************/
function ajaxGetXML(file, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            fn(xhr.responseXML);
        }
    };
    xhr.send();
}

/**createElement()**********************************************************************************************************************
 * [Zum erschaffen eines Tag´s]
 * @param {string} tab [Tagname]
 * @param {string} txt [tag Content]
************************************************************************************************************************************/

function createElement(tag, txt) {
    tag = document.createElement(tag);
    if (txt) {
        txt = document.createTextNode(txt);
        tag.appendChild(txt);
    }
    return tag;
}

/**removeContet()**********************************************************************************************************************
 * [Leeren eines Elements]
 * @param {Element} el [Element]
************************************************************************************************************************************/

function removeContent(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

/**getIndexInCollection()**********************************************************************************************************************
 * [Anzeige von Elementen und dessen Kinder]
 * @param {collection} collenction [gesamt Tag]
 * @param {element} element [einzelnes element]
************************************************************************************************************************************/

function getIndexInCollection(collection, element) {
    for (var i = 0; i < collection.length; i++) {
        if(collection[i] === element) {
            return i;            
        }                
    }
    return -1;
}