require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT= process.env.PORT;
const { CORS_ORIGIN } = process.env;

const servicesRoute = require('./routes/servicesRoute');

app.use(cors({origin:CORS_ORIGIN}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/services', servicesRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
