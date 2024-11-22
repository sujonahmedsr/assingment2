import { orderInterface } from "./ordersInterface"
import { orderModel } from "./ordersSchemaModel"

const createOrder = async (payload: orderInterface) => {
    const result = await orderModel.create(payload)
    return result
}
const getAllOrder = async () => {
    const result = await orderModel.aggregate([
        {
            $group: {_id: null, totalRevenue: {$sum: "$totalPrice"}},
        },
        {
            $project: {_id: 0, totalRevenue: 1}
        }
    ])
    return result[0]
}

export const orderServices = {
    createOrder,
    getAllOrder
}