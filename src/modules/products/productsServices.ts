import { productInterface } from "./productsInterface";
import { productModel } from "./productsSchmeModel";

const createProduct = async (payload: productInterface) => {
    const result = await productModel.create(payload)
    return result
}
const getProducts = async () => {
    const result = await productModel.find()
    return result
}

export const productServices = {
    createProduct,
    getProducts
}