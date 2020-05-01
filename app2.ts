import express from 'express';
const app = express();

app.get('/xxx', function (request, response) {
  response.send('你好2');
});

const port = 4000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
