const User =require('../models/User')
module.exports =class UserController{
    static async register(req,res){
        console.log('req.body:', req.body)
        console.log('Content-Type:', req.headers['content-type'])
        const { name,email,phone,password,confirmPassword} = req.body
        
        //validations
        if(!name){
            return res.status(422).json({message:'O nome é obrigatório'})
        }
        if(!email){
            return res.status(422).json({message:'O email é obrigatório'})
        }
        if(!phone){
            return res.status(422).json({message:'O telefone é obrigatório'})
        }
        if(!password){
            return res.status(422).json({message:'A senha é obrigatória'})
        }
        if(password !== confirmPassword){
            return res.status(422).json({message:'As senhas não conferem'})
        }
        res.json('Olá Get a Pet')
    }
}