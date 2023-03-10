const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    discription:{
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
    },{
          timestamps:true
    });

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;