const router = require('express').Router()
const citycontroller=require('../controller/cityController')
const parkingcontroller=require('../controller/parkingController')
const slotscontroller=require('../controller/slotsController')
const bookingcontroller=require('../controller/bookingController')
const usercontroller=require('../controller/userController')
const dashboardcontroller = require('../controller/dashboardController')
const multer = require('multer')

const citystorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/city')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(file)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  const cityupload = multer({ storage: citystorage })

router.post("/register",usercontroller.register)
router.post("/changepassword",usercontroller.changepassword)
router.post("/login",usercontroller.login)
router.post("/getallUser",usercontroller.getallUser)
router.post("/getsingleUser",usercontroller.getsingleUser)

router.post("/addCity",cityupload.single("image"),citycontroller.addCity)
router.post("/getallCity",citycontroller.getallCity)
router.post("/getsingleCity",citycontroller.getsingleCity)
router.post("/updateCity",citycontroller.updateCity)

router.post("/addParking",parkingcontroller.addParking)
router.post("/getallParking",parkingcontroller.getallParking)
router.post("/getsingleParking",parkingcontroller.getsingleParking)
router.post("/updateParking",parkingcontroller.updateParking)

router.post("/addSlots",slotscontroller.addSlots)
router.post("/getallslots",slotscontroller.getallSlots)
router.post("/getsingleSlots",slotscontroller.getsingleSlots)
router.post("/updateSlots",slotscontroller.updateSlots)

router.post("/addBooking",bookingcontroller.addBooking)
router.post("/getallBooking",bookingcontroller.getallBooking)
router.post("/getsingleBooking",bookingcontroller.getsingleBooking)
router.post("/updateBooking",bookingcontroller.updateBooking)

router.post("/register",usercontroller.register)
router.post("/changepassword",usercontroller.changepassword)
router.post("/login",usercontroller.login)
//router.post("/updateUser",usercontroller.updateUser)

router.post("/dashboard",dashboardcontroller.dashboard)



module.exports = router