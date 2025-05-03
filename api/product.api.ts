import axiosInstance from '@/utils/axiosInstance'

export const getAllProduct = async () => {
    const res = await axiosInstance.get('/products');
    return res.data;
}

export const getProductById = async (id: string) => {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
}
