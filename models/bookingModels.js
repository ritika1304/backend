const mongooge = require("mongoose")

const bookingschema = new mongooge.Schema({
    s_no:{type:String,default:null},
    user_details:{type:String,default:null},
    time:{type:String,default:null},
    cost:{type:String,default:null},
    isblocked:{type:Boolean,default:false},
    created_at :{ type:Date,default:Date.now()}
})

module.exports = new mongooge.model('addBooking',bookingschema)