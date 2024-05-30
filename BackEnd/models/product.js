const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    category:{
        type:String,
        required:true
    },
    crop_name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    base_price:{
        type:Number,
        required:true
    },
    moisture:Number,
    function_price:{
        type:Number,
        required:true
    },
    farmer_selected_price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('product', productSchema);