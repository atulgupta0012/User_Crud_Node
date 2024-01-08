  const User= require("../model/user");

  const createUser = async(req,res)=>
    {
        const{uname,uemail,upassword}=req.body;
        const createObj = {
            uname,
            uemail,
            upassword
        };
        const user=await User.create(createObj);

        return res.send(user);
    };

    //  find all the post 

    const findAll = async (req,res) => {
      try {
        const userPost = await User.aggregate([
          {
            $lookup: {
              from: 'posts',
              localField: '_id',
              foreignField: 'userId',
              as: 'postData'
            }
          }
        ])
        return res.send(userPost)
      } catch (error) {
        return res.send(error)
      }
    }




    

// create user
module.exports={
  createUser,
    findAll
}

















  // //  Create the new user
//   exports.create = async(req,res)=>
// {
//     const UserCreate=req.body;
//     try{

//         let UserData=new UserModel(UserCreate);
//         await UserData.save();
//         res.send(UserCreate);

//     }catch(error)
//     {
//         res.status(500).send(error);
//     }
    
// };


// //  get the all user

// exports.findAll=async(req,res)=>
// {
//     try{
//         const userget= await UserModel.find({});
//         res.send(userget);
//     }catch(error)
//     {
//         res.status(500).send({

//             message:error.message||"There are some error when we are retrieveing the user"
//         });
//     }
// };
        


// // update the user

// exports.update=async(req,res)=>
// {
//     let{...data}=req.body;
//     const result=await UserModel.findOneAndUpdate(
//         {_id:req.params.id},
//         data,
//         {
//             new:true,
//         }
//         );
//         res.send(result);
// };



// // delete the user

// exports.delete= async(req,res)=>
// {
//     try{
//         let id=req.params.id;

//         await UserModel.findByIdAndDelete(req.params.id);
//         res.status(200).send();
//     }catch(error)
//     {
//         res.status(500).send(error);
//     }
// };



