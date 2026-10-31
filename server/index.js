import express from 'express';
import moongose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/')

const app = express();


app.listen(5000, () => {
    console.log('server is running on port 5000 !');

});