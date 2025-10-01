const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const jobRoutes = require('./routes/job');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công!'))
  .catch(err => console.error('Không thể kết nối MongoDB:', err));

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

app.listen(port, () => {
  console.log(`Server đang chạy trên http://localhost:${port}`);
});
