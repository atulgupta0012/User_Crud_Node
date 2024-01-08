const express=require("express");
const router= express.Router();
const controller=require("../controller/post");


// create route
router.post("/create",controller.create);


router.get("/get",controller.getAll);



router.get("/user/:userId", controller.getByUserId);


router.get("/getall",controller.findall)


router.get("/:postId", controller.getById);







// // get route
// router.get("/",controller1.findAll);

// // update route

// router.put("/:id",controller1.update);



// // delete the data

// router.delete("/:id",controller1.delete);

module.exports=router;

