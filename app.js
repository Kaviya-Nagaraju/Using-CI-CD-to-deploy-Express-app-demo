const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');


app.use(cors());
// Middleware function to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'Hello from Test!' });
// });


// Import routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

// Use routes
app.use('/', indexRouter);
app.use('/', aboutRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
