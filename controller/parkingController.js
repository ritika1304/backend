const Parking= require('../models/parkingModel')

function addParking(req,res){
    var validation = ""
    if(req.body.parking_name == "")
    {
        validation += "Parking name is required \n"
    }
    if(req.body.city_name == "")
    {
        validation += "City name is required"
    }
    if(req.body.longitutude== "")
    {
        validation += "Longitutude is required"
    }
    if(req.body.latitude== "")
    {
        validation += "Latitude is required"
    }
    if(req.body.phone_no== "")
    {
        validation += "Phone No is required"
    }
    if(req.body.parking_owner== "")
    {
        validation += "Parking Owner is required"
    }
    if(req.body.address== "")
    {
        validation += "Address is required"
    }
    if(req.body.password== "")
    {
        validation += "Password is required"
    }
    if(req.body.email== "")
    {
        validation += "Email is required"
    }
    
    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        let parkingobject=new Parking()
        parkingobject.parking_name = req.body.parking_name
        parkingobject.city_name = req.body.city_name
        parkingobject.longitutude = req.body.longitutude
        parkingobject.latitude = req.body.latitude
        parkingobject.phone_no = req.body.phone_no
        parkingobject.parking_owner = req.body.parking_owner
        parkingobject.address = req.body.address
        parkingobject.password = req.body.password
        parkingobject.email = req.body.email
        parkingobject.save()
        
        res.json({
            'status':200,
            'success':true,
            'msg':'Slots inserted',
            'data':req.body
        })
    }
    
}

getallParking = (req,res)=>{
    Parking.find(req.body).exec()
    .then(parkingdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':parkingdata
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            msg : 'Error Occur',
            error : String(err)
        })
    })
    
}
getsingleParking= (req,res)=>{
    var validate = ""
    if(req.body._id == "")
    {
        validate += "_id is required"
    }
    if(!!validate)
    {
        res.json({
            status:409,
            success:false,
            msg:validate
        })
    }
    else{
        Parking.findOne({_id:req.body._id})
        .then(Parkingdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':parkingdata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg : 'Error Occur',
                error : String(err)
            })
        })
    }
}
updateParking = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.parking_name == "")
    {
        validation += "Parking name is required \n"
    }
    if(req.body.city_name== "")
    {
        validation += "City name is required"
    }
    if(req.body.longitutude== "")
    {
        validation += "Longitutude is required"
    }
    if(req.body.latitude== "")
    {
        validation += "Latitude is required"
    }
    if(req.body.phone_no== "")
    {
        validation += "Phone Number is required"
    }
    if(req.body.parking_owner== "")
    {
        validation += "Parking owner is required"
    }
    if(req.body.address== "")
    {
        validation += "Address is required"
    }
    if(req.body.password== "")
    {
        validation += "Password is required"
    }
    if(req.body.email== "")
    {
        validation += "Emailis required"
    }
    
    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        //check whether data exists or not wrt particular id
        Parking.findOne({_id:req.body._id})
        .then(parkingdata=>{
            if(parkingdata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                parkingdata.parking_name = req.body.parking_name
                parkingdata.city_name = req.body.city_name
                parkingdata.longitutude = req.body.longitutude
                parkingdata.latitude = req.body.latitude
                parkingdata.phone_no = req.body.phone_no
                parkingdata.parking_owner = req.body.parking_owner
                parkingdata.address = req.body.address
                parkingdata.password = req.body.password
                parkingdata.email = req.body.email
                parkingdata.save()

                res.json({
                    status:200,success:true,msg:'Record updated'
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:'Error',
                error:String(err)
            })
        }) 
    }
}
module.exports = {
    addParking,
    getallParking,
    getsingleParking,
    updateParking,
}
