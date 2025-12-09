const User =require('../models/User')
module.exports =class UserController{
    static async register(req,res){
       
        const  {name,phone,email,password,confirmPassword} = req.body;
        
        //validations
        if(!name){
            return res.status(422).json({message:'O nome é obrigatório'})
        }
        if(!phone){
            return res.status(422).json({message:'O telefone é obrigatório'})
        }
        if(!email){
            return res.status(422).json({message:'O email é obrigatório'})
        }
        if(!password){
            return res.status(422).json({message:'A senha é obrigatória'})
        }
        if(password !== confirmPassword){
            return res.status(422).json({message:'As senhas não conferem'})
        }
        //check if user exists
        const userExists = await User.findOne({email:email})
        if(userExists){
            return res.status(422).json({message:'Por favor, utilize outro e-mail!'})
        }
    }
}