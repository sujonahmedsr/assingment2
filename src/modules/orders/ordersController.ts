import { Request, Response } from "express";
import { orderServices } from "./orderServices";

const createConOrder = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const result = await orderServices.createOrder(body);
        res.status(200).send({
            message: "Order created successfully",
            success: true,
            data: result
        })
    } catch (error:any) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            error,
            stack: error?.stack
        })
    }
}
const getAllConOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrder();
        res.status(200).send({
            message: "Orders retrieved successfully",
            success: true,
            data: result
        })
    } catch (error:any) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            error,
            stack: error?.stack
        })
    }
}

export const orderController = {
    createConOrder,
    getAllConOrder
}