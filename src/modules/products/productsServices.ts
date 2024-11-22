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
const getSingleProducts = async (id: string) => {
    const result = await productModel.findById(id)
    return result
}
const updateSingleProducts = async (id: string, body: productInterface) => {
    const result = await productModel.findByIdAndUpdate(id,body, {new : true})
    return result
}
const deleteSingleProducts = async (id: string) => {
    const result = await productModel.findByIdAndDelete(id)
    return result
}

export const productServices = {
    createProduct,
    getProducts,
    getSingleProducts,
    updateSingleProducts,
    deleteSingleProducts
}