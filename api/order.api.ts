import axiosInstance from "@/utils/axiosInstance";

export const createOrder = async (userId: string, totalPrice: number) => {
    const res = await axiosInstance.post('/orders', {
        userId: userId, totalPrice: totalPrice
    });
    return res.data;
}

export const getOrdersByUserStatus = async (userId: string, status: string) => {
    const res = await axiosInstance.get(`/orders/?userId=${userId}&status=${status}`);
    return res.data;
}
export const getOrderById = async (id: string) => {

    const res = await axiosInstance.get(`/orders/${id}`);
    // console.log("detail", res.data);
    return res.data;
}

export const patchOrderStatus = async (id: string, newStatus: string) => {

    const res = await axiosInstance.patch(`/orders/update-status`, {
        id, newStatus
    });
    // console.log("detail", res.data);
    return res.data;
}

export const buyAgain = async (userId: string, items: CartItem[]) => {
    await items.forEach((item) => {
        const res = axiosInstance.post('/users/cart', {
            userId, productId: item.product._id, quantity: item.quantity
        })
    })
    // return res.data;
}