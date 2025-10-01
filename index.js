const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Công Việc Từ Xa!');
});

app.listen(port, () => {
  console.log(`Server đang chạy trên http://localhost:${port}`);
});
