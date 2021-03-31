import mongose from 'mongoose';
const postSchema = mongose.Schema({
    title:String,
    message:String,
    creator:String,
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
})
var PostMessage = mongose.model('PostMessage', postSchema);
export default PostMessage;