const mongoose=require("mongoose");

const PostSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    title:{
        type:String
    },
    description:{
        type:String
    }
},
   
    {timestamps:true}

);

const Post=mongoose.model("posts",PostSchema);

Post.find().populate("userId").then(p=>
    {
        console.log(p)
    })
    .catch(error=>{
        console.log(error);
    })



module.exports=Post;




