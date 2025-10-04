const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- In-memory demo data (replace with DB later) ---
let customers = [];
let loans = [];
let payments = [];

// --- API: health ---
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// --- API: customers ---
app.get('/api/customers', (req, res) => res.json(customers));
app.post('/api/customers', (req, res) => {
  const c = { id: Date.now().toString(), ...req.body };
  customers.push(c);
  res.status(201).json(c);
});

// --- API: loans ---
app.get('/api/loans', (req, res) => res.json(loans));
app.post('/api/loans', (req, res) => {
  const l = { id: Date.now().toString(), ...req.body };
  loans.push(l);
  res.status(201).json(l);
});

// --- API: payments ---
app.get('/api/payments', (req, res) => res.json(payments));
app.post('/api/payments', (req, res) => {
  const p = { id: Date.now().toString(), ...req.body };
  payments.push(p);
  res.status(201).json(p);
});

// --- Serve static UI ---
app.use(express.static(path.join(__dirname, 'public')));

// Single-page fallback (if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(\Server running on port \\);
});
