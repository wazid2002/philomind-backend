const mongoose = require('moongose');

const lessoncontentSchema = new mongoose.Scheme({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'LessonCategory',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports= mongoose.model('LessonContent',lessoncontentSchema);