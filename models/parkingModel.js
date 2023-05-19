const mongooge = require("mongoose")

const parkingschema = new mongooge.Schema({
    parking_name:{type:String,default:null},
    city_name:{type:String,default:null},
    longitutude:{type:String,default:null},
    latitude:{type:String,default:null},
    phone_no:{type:String,default:null},
    parking_owner:{type:String,default:null},
    address:{type:String,default:null},
    password:{type:String,default:null},
    email:{type:String,default:null},
    isblocked:{type:Boolean,default:false},
    created_at :{ type:Date,default:Date.now()}
})

module.exports = new mongooge.model('addParking',parkingschema)