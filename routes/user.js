const express=require("express");
const router= express.Router();
const controller=require("../controller/user");

// create route
router.post("/create",controller.createUser);
router.get('/find-all', controller.findAll)



// // get route
 

// // update route

// router.put("/:id",controller1.update);



// // delete the data

// router.delete("/:id",controller1.delete);

module.exports=router;

