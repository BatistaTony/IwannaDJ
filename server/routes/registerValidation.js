const Joi = require('@hapi/joi')

function Validationregister(data){

    const schema  = {
        nome: Joi.string().max(20).min(7).required(),
        telefone: Joi.string().max(9).min(9).required(),
        senha: Joi.string().max(10).min(6).required(),
        endereco:Joi.string().max(30).min(3).required(),
        festa: Joi.string().max(15).min(4).required(),
        preco: Joi.number().required(),
        nivel: Joi.string().max(15).min(4).required(),
        aparelho: Joi.boolean().required()
    }

    const validate  = Joi.validate(data, schema)
    return validate
}

function Validationupdate(data){

    const schema  = {
        id: Joi.string().required(),
        nome: Joi.string().max(20).min(7).required(),
        telefone: Joi.string().max(9).min(9).required(),
        endereco:Joi.string().max(30).min(3).required(),
        festa: Joi.string().max(15).min(4).required(),
        preco: Joi.number().required(),
        nivel: Joi.string().max(15).min(4).required(),
        aparelho: Joi.boolean().required()
    }

    const validate  = Joi.validate(data, schema)
    return validate
}

function Validationlogin(data){

    const schema  = {
        telefone: Joi.string().max(9).min(9).required(),
        senha: Joi.string().max(10).min(6).required(),
    }

    const validate  = Joi.validate(data, schema)
    return validate
    
}




module.exports.Validationregister = Validationregister
module.exports.Validationlogin = Validationlogin
module.exports.Validationupdate = Validationupdate