const express = require('express');

const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoute');
const videoRoutes = require('./routes/videoRoute');

const connect = require('./util/database');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);

app.get('*', (req, res) => {
    res.send('<h1 style="width: 300px; margin: 0px auto; margin-top: 100px">Welcome to Server</h1>')
});

app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server running on port ${process.env.PORT}`);
})