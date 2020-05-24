const mongoose = require('mongoose');

const dev_db = process.env.MONGODB_URI;

mongoose.connect(dev_db, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.error(err));