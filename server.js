const express = require('express');
const app = express();

const PORT = 3000;

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

app.post('/api/users', (req, res) => {
    res.json({ message: 'User created' });
});

app.put('/api/users/:id', (req, res) => {
    res.json({ message: `User ${req.params.id} updated` });
});

app.delete('/api/users/:id', (req, res) => {
    res.json({ message: `User ${req.params.id} deleted` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

