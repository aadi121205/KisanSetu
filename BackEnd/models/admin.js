const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    admin_powers:{
        type:bool,
        required:true
        },
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
})

module.exports = mongoose.model('admin', adminSchema);