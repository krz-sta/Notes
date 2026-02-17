const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes',
    waitForConnections: true,
    connectionLimit: 10
}).promise();

db.getConnection()
    .then(() => console.log('Połączono z bazą MySQL na WSL!'))
    .catch(err => {
        console.error('BŁĄD POŁĄCZENIA Z BAZĄ:', err.message);
    });

app.get('/api/notes', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM notes ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        console.error('Błąd GET /api/notes:', err);
        res.status(500).json({ error: 'Błąd bazy danych' });
    }
});

app.post('/api/notes', async (req, res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ error: 'Tytuł i treść są wymagane!' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO notes (title, content) VALUES (?, ?)', 
            [title, content]
        );
        res.status(201).json({ 
            id: result.insertId, 
            title, 
            content 
        });
    } catch (err) {
        console.error('Błąd POST /api/notes:', err);
        res.status(500).json({ error: 'Nie udało się dodać notatki' });
    }
});

app.delete('/api/notes/:id', async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM notes WHERE id = ?', [req.params.id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Nie znaleziono notatki' });
        }
        
        res.json({ message: 'Usunięto' });
    } catch (err) {
        console.error('Błąd DELETE /api/notes:', err);
        res.status(500).json({ error: 'Błąd podczas usuwania' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});