const mongoose = require('mongoose');

module.exports = {
    connect:() =>{
        mongoose.connect(process.env.DB_URL,(err)=>{
            if(err){
                console.log(err)
            }
            console.log('connected to db');
        })
    }
}