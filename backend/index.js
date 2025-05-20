import express from 'express';

/** Zentrales Objekt für unsere Express-Applikation */
//const express = require('express')
const app = express();
const port = 3000

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

app.use(express.json()); // Middleware, um JSON-Body zu parsen

// Create-Operation (POST /todos)
app.post('/todos', (req, res) => {
    const { title, due, status } = req.body;
    if (!title || !due || typeof status !== 'number') {
        return res.status(400).json({ error: 'Ungültige ToDo-Daten' });
    }
    const newTodo = {
        _id: Date.now(),
        title,
        due,
        status
    };
    TODOS.push(newTodo);
    res.status(201).json(newTodo);
});

// Read-Operation (GET /todos/:id)
app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = TODOS.find(t => t._id === id);
    if (!todo) {
        return res.status(404).json({ error: 'ToDo nicht gefunden' });
    }
    res.json(todo);
});

// Read-Opreation (GET /todos)
// Gibt alle Todos zurück
app.get('/todos', (req, res) => {
    res.json(TODOS);
});

//Delete-Operation (DELETE /todos/:id)
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = TODOS.findIndex(t => t._id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'ToDo nicht gefunden' });
    }
    TODOS.splice(index, 1);
    res.status(204).send();
});

//app.listen(3000);
app.listen(port, () => {
    console.log(`TODO APP JB listening on port ${port}`)
})