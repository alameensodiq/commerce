const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     name: {
         type:String,
         required:[true, 'name must be entered'],
         trim: true
     },
     email: {
        type:String,
        required:[true, 'email must be entered'],
        unique: true
    },
    password: {
        type:String,
        required:[true, 'password must be entered'],
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type:Array,
        default:[]
    }    
},{
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)