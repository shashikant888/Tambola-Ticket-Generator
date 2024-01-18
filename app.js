const express = require('express');
const bodyParser = require('body-parser');
const tambolaRoutes = require('./routes/tambolaRoutes');
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(requestLogger);

app.use('/tambola', tambolaRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
