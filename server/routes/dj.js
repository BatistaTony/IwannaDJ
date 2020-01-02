const router  = require('express').Router()
const DJ = require('./../model/dj')
const bcrypt = require('bcryptjs')
const { Validationregister ,Validationupdate, Validationlogin } = require('./registerValidation')


router.get('/get', async (req,res)=>{
    try{
        const djs = await DJ.find()
        res.json(djs)
    }catch(err){
        console.log(err)
    }
})

router.post('/register', async  (req,res)=>{

    const {error} = Validationregister(req.body)
    

    if(error){
        res.json({message: error.details[0].message})
    }else{
    const djExist = await DJ.findOne({telefone: req.body.telefone})


    if(djExist){
        
        res.json({message: 'Numero do telefone Ja existe'})
    }else{

        const Salt  = await  bcrypt.genSalt(10)
        const hashedP = await  bcrypt.hash(req.body.senha, Salt)
            const dj = new DJ({
            nome: req.body.nome,
            telefone: req.body.telefone,
            senha: hashedP,
            endereco: req.body.endereco,
            festa: req.body.festa,
            preco: req.body.preco,
            nivel: req.body.nivel,
            aparelho: req.body.aparelho,
        })

        try{

            const djSaved = await dj.save()

            res.json(djSaved)

        }catch(err){
            console.log(err)
        }

    }
}
})

router.post('/login', async (req,res)=>{

    const {error} = Validationlogin(req.body)
    

    if(error){
        res.json({message: error.details[0].message})
    }else{

    const djExiste  = await DJ.findOne({telefone:req.body.telefone})

    if(djExiste){
            const senha = req.body.senha
            const validDj = await bcrypt.compare(senha,djExiste.senha)

            if(validDj){
                res.json(djExiste)
            }else{
                res.json({message: 'DJ NN EXISTE'})
            }
    }else{
        res.json({message: 'DJ NN EXISTE'})
    }
}
})

router.post('/update', async  (req,res)=>{

    const {error} = Validationupdate(req.body)
    

    if(error){
        res.json({message: error.details[0].message})
    }else{
    
        const dj = {

            nome: req.body.nome,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
            festa: req.body.festa,
            preco: req.body.preco,
            nivel: req.body.nivel,
            aparelho: req.body.aparelho,
        }

        try{

            const djupdated = await DJ.findOneAndUpdate({_id:req.body.id},dj)

            res.json(djupdated)

        }catch(err){
            console.log(err)
        }

    }

})

router.post('/search', async (req,res)=>{
    const query = {
        festa:req.body.festa,
        preco: req.body.preco,
        aparelho: req.body.aparelho,
        endereco: req.body.endereco
    }

    try {
        const dj = await DJ.find(query)

        res.json(dj)


    } catch (error) {
        console.log(error)
    }
})




module.exports = router