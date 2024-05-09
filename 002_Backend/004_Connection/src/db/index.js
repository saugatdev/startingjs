import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{

    try {
        
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    console.log( `MONGODB Connected!!! ` );
    console.log("Hey Saugat This is the only connection you can have !");

    } catch (error) {
        console.log("MONGODB Connection FAILED", error);
        process.exit(1)
        
    }

}

export default connectDB