import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json()); 

const PORT = 5000;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('http://localhost:8000/chat', { message });
    res.json(response.data);
  } catch (error) {
    console.error('Error communicating with AI engine:', error);
    res.status(500).json({ error: 'AI engine error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
