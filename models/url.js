const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
        unique:true
    },
    shortId:{
        type:String, 
        required:true,
        unique:true
    },
   clicks: [{timestamp:{type:Number} }],
}, {timestamps:true})

urlSchema.index({shortId:1});

const url = mongoose.model('url', urlSchema);

module.exports = url