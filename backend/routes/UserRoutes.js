const router =require('express').Router()
const UserController=require('../Controller/UserController')

router.post('/register',UserController.register)

module.exports=router