const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/node_tutorial', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failed!!!');
    }
}

module.exports = { connect };
