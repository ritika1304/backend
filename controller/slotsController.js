const Slots= require('../models/slotsModel')

function addSlots(req,res){
    var validation = ""
    if(req.body.slots == "")
    {
        validation += "Slots is required \n"
    }
    if(req.body.price_Day== "")
    {
        validation += "Price Day is required"
    }
    if(req.body.vehicle== "")
    {
        validation += "vehicle is required"
    }
    if(req.body.price_Hour== "")
    {
        validation += "Price Hour is required"
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
        let slotsobject=new Slots()
        slotsdata.slots = req.body.slots
        slotsdata.price_Day = req.body.price_Day
        slotsdata.vehicle = req.body.vehicle
        slotsdata.price_Hour = req.body.price_Hour
        slotsobject.save()
        
        res.json({
            'status':200,
            'success':true,
            'msg':'Slots inserted',
            'data':req.body
        })
    }
    
}

getallSlots = (req,res)=>{
    Slots.find(req.body).exec()
    .then(slotsdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':slotsdata
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
getsingleSlots= (req,res)=>{
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
        Slots.findOne({_id:req.body._id})
        .then(slotsdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':slotsdata
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
updateSlots= (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.slots == "")
    {
        validation += "slots is required \n"
    }
    if(req.body.price_Day== "")
    {
        validation += "City name is required"
    }
    if(req.body.vehicle== "")
    {
        validation += "vehicle is required"
    }
    if(req.body.price_Hour== "")
    {
        validation += "price_Hour is required"
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
        Slots.findOne({_id:req.body._id})
        .then(slotsdata=>{
            if(slotsdata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                slotsdata.slots = req.body.slots
                slotsdata.price_Day = req.body.price_Day
                slotsdata.vehicle = req.body.vehicle
                slotsdata.price_Hour = req.body.price_Hour
                slotsdata.save()

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
    addSlots,
    getallSlots,
    getsingleSlots,
    updateSlots,
    
}