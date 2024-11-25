const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    code: 200,
    message: 'hello world',
    data: [
      {
        id: 1,
        username: 'marry'
      }
    ]
  });
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})