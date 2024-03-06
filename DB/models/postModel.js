import { Schema, model } from "mongoose";
import userModel from "./userModel.js";

const postSchema = new Schema({
image:{
type:String,
default:"https://instagram-clone-jenin.s3.eu-north-1.amazonaws.com/1696628128389.png"
    },
description:{
    type:String,
    require:true
},
likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
UserId:{
    type:Schema.Types.ObjectId,
    require:true ,
    ref: 'User',  //referencing the User model
}
})

const postModel = model('Post',postSchema);
export default postModel;