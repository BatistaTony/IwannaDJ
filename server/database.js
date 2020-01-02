const mongoose = require('mongoose')


class Database {
    constructor(){
        this._connect()
    }


    _connect(){
        try{

            mongoose.connect('mongodb://localhost/iwannadj',{ useNewUrlParser: true }, (err)=>{
                if(err) console.log(err)

                console.log('Connected')
            })

        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new Database()