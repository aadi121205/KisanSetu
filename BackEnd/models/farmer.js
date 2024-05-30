const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmerSchema = new Schema({
    username:{
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
    email:String,
    product_id:Array,
    
})

module.exports = mongoose.model('farmer', farmerSchema);