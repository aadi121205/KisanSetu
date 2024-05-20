const mongoose = require('mongoose');
const { Schema } = mongoose;

const buyerSchema = new Schema({
    name:{
        type:String,
        required:true
        },
        password:{
        type:String,
        required:true
        },
        contact_no:{
        type:String,
        required:true
        },
        email:{
        type:String,
        required:true
        },
        identification_of_business:{
        type:String,
        required:true
        },

})

module.exports = mongoose.model('buyer', buyerSchema);