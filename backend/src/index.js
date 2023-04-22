import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const data = [
  'Ana',
  'Bruno',
  'Carla',
  'Daniel',
  'Eduarda',
  'Fabio',
  'Gabriela',
  'Henrique',
  'Isabela',
  'João',
  'Karine',
  'Lucas',
  'Mariana',
  'Nathalia',
  'Otávio',
  'Paula',
  'Rafael',
  'Sabrina',
  'Thiago',
  'Vitoria',
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ version: '0.0.1' });
});

// get all
app.get('/datas', (req, res) => {
  res.status(200).json({ data });
});

// get by name
app.get('/datas/:name', (req, res) => {
  const name = req.params.name;
  const user = data.indexOf(name);

  if (user === -1) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  res.status(200).json({ user: data[user] });
});

// add user
app.post('/datas', (req, res) => {
  const { name } = req.body;
  
  data.push(name);

  res.status(200).json({ message: 'User created successfully' });
});

app.listen(PORT, HOST, () => {
  console.log('Server Rodando');
});
