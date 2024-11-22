import { Request, Response } from "express";
import { productServices } from "./productsServices";

const createConProduct = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const result = await productServices.createProduct(body)
        res.status(200).send({
            success: true,
            messsage: 'Bicycle created successfully',
            data: result
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            err
        })
    }
}
const getConProduct = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getProducts()
        res.status(200).send({
            success: true,
            messsage: 'Bicycles retrieved successfully',
            data: result
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            err
        })
    }
}

const getSingleConProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await productServices.getSingleProducts(id)
        res.status(200).send({
            success: true,
            messsage: 'Bicycle retrieved successfully',
            data: result
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            err
        })
    }
}

const updateSingleConProduct = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const id = req.params.id
        const result = await productServices.updateSingleProducts(id, body)
        res.status(200).send({
            success: true,
            messsage: 'Bicycle updated successfully',
            data: result
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            err
        })
    }
}
const deleteSingleConProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await productServices.deleteSingleProducts(id)
        res.status(200).send({
            success: true,
            messsage: 'Bicycle updated successfully',
            data: result
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            messsage: 'Validation failed',
            err
        })
    }
}

export const productController = {
    createConProduct,
    getConProduct,
    getSingleConProduct,
    updateSingleConProduct,
    deleteSingleConProduct
}