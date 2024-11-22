import { Router } from "express";
import { productController } from "./productsController";

const productsRouter = Router()

productsRouter.post('/create-products', productController.createConProduct)
productsRouter.get('/', productController.getConProduct)

export default productsRouter