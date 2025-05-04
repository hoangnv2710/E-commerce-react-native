import axiosInstance from "@/utils/axiosInstance";

export const createOrder = async (userId: string, totalPrice: number) => {
    const res = await axiosInstance.post('/orders', {
        userId: userId, totalPrice: totalPrice
    });
    return res.data;
}

export const getOrder = async (userId: string, status: string) => {
    const res = await axiosInstance.get(`/orders/?userId=${userId}&status=${status}`);
    return res.data;
}