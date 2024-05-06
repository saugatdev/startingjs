const getContact =(req,res)=>{
    res.json({message: "Get all Contacts Bruh"})
   };


const createContact =(req,res)=>{
    res.status(201).json({message: "Get all Contacts Bruh"})
   };



   module.exports={getContact,createContact}

