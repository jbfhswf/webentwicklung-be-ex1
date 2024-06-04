import express from 'express';

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();

/**
 * Liste aller ToDos. 
 * Wird später durch Datenbank ersetzt!
 */
let TODOS = [
    {
        "_id": 1671056616571,
        "title": "Übung 4 machen",
        "due": "2022-11-12T00:00:00.000Z",
        "status": 0
    },
    {
        "_id": 1671087245763,
        "title": "Für die Klausur Webentwicklung lernen",
        "due": "2023-01-14T00:00:00.000Z",
        "status": 2
    },
    {
        "_id": 1671087245764,
        "title": "Einen Kuchen backen",
        "due": "2023-01-14T00:00:00.000Z",
        "status": 1
    }
];

// Your code here
app.get('/todos', (req, res) => {
    res.json(TODOS);
});
app.listen(3000);