const mongooge = require("mongoose")

const slotsschema = new mongooge.Schema({
    slots:{type:String,default:null},
    price_Day:{type:String,default:null},
    vehicle:{type:String,default:null},
    price_Hour:{type:String,default:null},
    isblocked:{type:Boolean,default:false},
    created_at :{ type:Date,default:Date.now()}
})

module.exports = new mongooge.model('addSlots',slotsschema)