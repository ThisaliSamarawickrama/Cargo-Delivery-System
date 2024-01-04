const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    receiverName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postCategory:{
        type:String,
        required:true
    }



});

module.exports = mongoose.model('posts', postSchema);






