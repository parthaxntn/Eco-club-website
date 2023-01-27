const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter blog Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter blog Description"],
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

    formLink:{
        type: String
    },
   
    startTime:{
        type:String,
        required: [true, "Please Enter blog start Time"],
    },
    startDate:{
        type:Date,
        required: [true, "Please Enter blog start date"],
    },
    endDate:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("blog",blogSchema);