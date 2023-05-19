const mongooge = require("mongoose")

const cityschema = new mongooge.Schema({
    city_name:{type:String,default:null},
    image:{type:String,default:"No image.jpg"},
    isblocked:{type:Boolean,default:false},
    created_at :{ type:Date,default:Date.now()}
})

module.exports = new mongooge.model('addCity',cityschema)