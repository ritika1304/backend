const Booking = require("../models/bookingModels")
const City = require("../models/cityModels")
const Parking = require("../models/parkingModel")
const Slots = require("../models/slotsModel")

dashboard = async (req,res)=>{
    totalbooking= 0
    totalcity = 0
    totalparking = 0
    totalslots = 0

    await Booking.countDocuments().then(bookingcount =>{
        totalbooking = bookingcount
    })

    await City.countDocuments().then(citycount =>{
        totalcity = citycount
    })

    await Parking.countDocuments().then(parkingcount =>{
        totalparking= parkingcount
    })

    await Slots.countDocuments().then(slotscount =>{
        totalslots = slotscount
    })

    res.json({
        status:200,
        success:true,
        total_booking : totalbooking,
        total_city : totalcity,
        total_parking : totalparking,
        total_slots : totalslots,

    })
}

module.exports = {
    dashboard    
}