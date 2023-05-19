const Booking= require('../models/bookingModels')

function addBooking(req,res){
    var validation = ""
    if(req.body.s_no == "")
    {
        validation += "Serial  number is required \n"
    }
    if(req.body.user_details== "")
    {
        validation += "user details is required"
    }
    if(req.body.time== "")
    {
        validation += "Time is required"
    }
    if(req.body.cost== "")
    {
        validation += "Cost is required"
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
        let bookingobject=new Booking()
        bookingobject.s_no=req.body.s_no
        bookingobject.user_details=req.body.user_details
        bookingobject.time=req.body.time
        bookingobject.cost=req.body.cost
        bookingobject.save()
        
        res.json({
            'status':200,
            'success':true,
            'msg':'Booking inserted',
            'data':req.body
        })
    }
    
}

getallBooking= (req,res)=>{
    Booking.find(req.body).exec()
    .then(bookingdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':bookingdata
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
getsingleBooking = (req,res)=>{
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
        Booking.findOne({_id:req.body._id})
        .then(bookingdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':bookingdata
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
updateBooking = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.s_no== "")
    {
        validation += "Serial number is required \n"
    }
    if(req.body.user_details== "")
    {
        validation += "user_details is required"
    }
    if(req.body.time== "")
    {
        validation += "user_details is required"
    }
    if(req.body.cost== "")
    {
        validation += "user_details is required"
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
        Booking.findOne({_id:req.body._id})
        .then(bookingdata=>{
            if(bookingdata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                bookingdata.s_no= req.body.s_no
                bookingdata.user_details = req.body.user_details
                bookingdata.time = req.body.time
                bookingdata.cost = req.body.cost
                bookingdata.save()

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
    addBooking,
    getallBooking,
    getsingleBooking,
    updateBooking,
    
}