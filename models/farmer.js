const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmerSchema = new Schema({
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
    email:String,
    product_id:array,
    admin_powers:{
    type:bool,
    required:true
    },
})

module.exports = mongoose.model('farmer', farmerSchema);