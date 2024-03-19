const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();
const { CORS_ORIGIN } = process.env;
const PORT= process.env.PORT;
app.use(cors({origin:CORS_ORIGIN}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
