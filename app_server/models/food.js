const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3 },
    type:{type:String, required:true}
});