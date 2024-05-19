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
        type:float,
        required:true
        },
        base_price:{
        type:float,
        required:true
        },
        moisture:float,
        function_price:{
        type:float,
        required:true
        },
        farmer_selected_price:{
        type:float,
        required:true
        }
})

module.exports = mongoose.model('product', productSchema);