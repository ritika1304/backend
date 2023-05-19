const express = require('express')
const app = express()
const port=3000
const config=require('./Config/db')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:'50mb'}))
app.use(express.static(__dirname+("/public")))
const adminRoutes = require('./routes/adminRoutes')
app.use("/admin",adminRoutes)

const seeder = require('./Config/seeder')
seeder.adminseeder()

app.listen (port,()=>{
    console.log("Server Running at port" + port)

})