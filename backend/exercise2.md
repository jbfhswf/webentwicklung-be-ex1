# Frontend an Backend anbinden

In dieser Aufgabe wollen wir das Frontend an das Backend anbinden. Dazu müssen wir die REST-Schnittstelle des Backends im Frontend ansprechen.

## Aufgabe 1: REST-Schnittstelle im Frontend ansprechen
Aktuell wird die ToDo-Liste im Frontend als Konstante initialisiert.
Verwenden Sie stattdessen im `onload` Callback die Funktion `fetch()`, um die Liste der ToDos vom Backend zu laden. 

> Zur Erinnerung: Die Funktion `fetch()` gibt ein Promise zurück, d.h. das Ergebnis erhalten Sie *asynchron*.

Das Ergebnis sollten Sie im Frontend in einer Variable speichern, damit Sie die Liste nur einmalig beim Laden der Seite abrufen müssen.

## Aufgabe 2: Hinzufügen, Löschen und Ändern von ToDos

Bei den Änderungen der ToDos müssen Sie darauf achten, dass die Daten im Frontend aktuell bleiben. Konkret heißt das, dass Sie 

- beim Anlegen eines ToDos den neuen Eintrag, den Sie beim POST Request zurückerhalten, auch in die lokale Liste einfügen,
- beim Löschen eines ToDos im Anschluss den Eintrag aus der Liste entfernen, 
- Änderungen eines ToDos nach einem erfolgreichen PUT Request auch in die lokale Liste eintragen.

## Aufgabe 3: Testen
Testen Sie die Anwendung, indem Sie Todos anlegen, bearbeiten und löschen.

