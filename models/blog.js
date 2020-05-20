const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//47.151950, 5.771348
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type:String,
        required: true
    }, 
    imgURL:{
        type:String,
        required: true
    },
    resume:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', blogSchema)
