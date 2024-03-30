const express = require('express');
const app = express();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listenting on port ${port}`));
