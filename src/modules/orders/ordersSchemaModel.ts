import mongoose, { model, Schema } from "mongoose";
import { orderInterface } from "./ordersInterface";

// create scheme for orders 
const orderShchema = new Schema<orderInterface>({
    email: {type: String, required: [true, 'email field is required']},
    product: {type: mongoose.Schema.Types.ObjectId, required: [true, 'product field is required']},
    quantity: {type: Number, required: [true, 'quantity field is required']},
    totalPrice: {type: Number, required: [true, 'totalPrice field is required']}
}, {timestamps: true})

// create model for order 
export const orderModel = model<orderInterface>('orders', orderShchema)

