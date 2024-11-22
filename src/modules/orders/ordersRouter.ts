import { Router } from "express";
import { orderController } from "./ordersController";

const orderRouter = Router()

orderRouter.post('/create-order', orderController.createConOrder)
orderRouter.get('/revenue', orderController.getAllConOrder)

export default orderRouter;