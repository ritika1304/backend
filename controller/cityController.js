const City= require('../models/cityModels')

function addCity(req,res){
    var validation = ""
    if(req.body.city_name == "")
    {
        validation += "City name is required \n"
    }
    if(req.body.image == "")
    {
        validation += "Image is required"
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
        let cityobject=new City()
        cityobject.city_name=req.body.city_name
        cityobject.image=req.body.image
        cityobject.save()
        
        res.json({
            'status':200,
            'success':true,
            'msg':'City inserted',
            'data':req.body
        })
    }
    
}

getallCity = (req,res)=>{
    City.find(req.body).exec()
    .then(citydata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':citydata
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
getsingleCity = (req,res)=>{
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
        City.findOne({_id:req.body._id})
        .then(citydata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':citydata
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
updateCity = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.city_name == "")
    {
        validation += "City name is required \n"
    }
    if(req.body.image== "")
    {
        validation += "Image is required"
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
        City.findOne({_id:req.body._id})
        .then(citydata=>{
            if(citydata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                citydata.city_name = req.body.city_name
                if(req.file)
                {
                    citydata.image = "city/"+req.file.filename
                }
                citydata.save()

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
    addCity,
    getallCity,
    getsingleCity,
    updateCity,
    
}
