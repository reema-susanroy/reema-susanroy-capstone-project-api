require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT= process.env.PORT;
const { CORS_ORIGIN } = process.env;
app.use(express.static("public"));

const servicesRoute = require('./routes/servicesRoute');
const providersRoute = require('./routes/providersRoute');
const userController = require('./routes/userRoute');

app.use(cors({origin:CORS_ORIGIN}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/services', servicesRoute);
app.use('/api/providers', providersRoute);
app.use('/api/users',userController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
