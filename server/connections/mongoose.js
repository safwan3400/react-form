

const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost/tasks', () => {
        console.log('database connected: tasks');
    });
} catch (error) {
    console.log(error);
}

const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: String,
    email: String,
    details: String
});

const FormModel = mongoose.model("FormData", FormSchema);

module.exports = { FormModel }