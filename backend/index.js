require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Demo users (no database yet)
const users = [{ username: 'admin', password: 'admin123' }];

app.get('/', (req, res) => res.send('Backend is running'));

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  res.json({ message: `Welcome, ${username}!` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
