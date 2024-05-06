const express = require("express");
const { getContact } = require("../controllers/contactControllers");
const router = express.Router();
const { createContact } =require("../controllers/contactControllers" ); 

router.route('/').get(getContact);

router.route('/').post(createContact);

router.route('/:id').get((req,res)=>{
 res.json({message: `Get Contact  for ${req.params.id}`})
});

router.route('/:id').put((req,res)=>{
 res.json({message: `Put Contact  for ${req.params.id}`})
});


router.route('/:id').delete((req,res)=>{
    res.json({message: `Delete Contact  for ${req.params.id}`})
   });

module.exports=router;