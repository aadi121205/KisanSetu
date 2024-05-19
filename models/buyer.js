const mongoose = require('mongoose');
const { Schema } = mongoose;

const buyerSchema = new Schema({
    name:{
        type:string,
        required:true
        },
        password:{
        type:string,
        required:true
        },
        contact_no:{
        type:string,
        required:true
        },
        email:{
        type:string,
        required:true
        },
        identification_of_business:{
        type:string,
        required:true
        },
        admin_powers:{
        type:bool,
        required:true
        },
})

module.exports = mongoose.model('buyer', buyerSchema);