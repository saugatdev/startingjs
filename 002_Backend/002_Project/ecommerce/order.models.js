import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },

    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema= new mongoose.orderSchema({

    orderPrice:{
        type:Number,
        required:true
    },

    customer:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type: [orderItemSchema]
    },

    address:{
        type:String,
        required:true,
        

    }


},

{
    timestamps:true
})

export const Order = mongoose.model("Order", orderSchema)