const getContacts =(req,res)=>{
    res.status(200).json({message: "Get Contacts"})
   };

const getContact =(req,res)=>{
    res.status(201).json({message: `Get Contact  for ${req.params.id}`})
   };

   const createContact =(req,res)=>{
    console.log(req.body);
    const {name, email, phone} =req.body;
    if(!name || !email || !phone){
        req.status(400);
        throw new Error("All field Mandatory")

    }
    
    res.status(201).json({message: `CREATE Contact`})
   };


const updateContact =(req,res)=>{
    res.status(200).json({message: `Update Contact  for ${req.params.id}`})
   };

const deleteContact =(req,res)=>{
    res.status(201).json({message: `Put Contact  for ${req.params.id}`})
   };




   module.exports={
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact}

