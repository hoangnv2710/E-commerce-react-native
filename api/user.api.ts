import axiosInstance from '@/utils/axiosInstance'

export const registerUser = async (email: string, password: string, name: string) => {
    const res = await axiosInstance.post('/users/register', {
        email: email,
        password: password,
        name: name,
    });
    return res.data;
}

export const loginUser = async (email: string, password: string) => {

    const res = await axiosInstance.post('/users/login', {
        email: email,
        password: password,
    })
    return res.data;
}

export const addToCart = async (userId: string, productId: string, quantity: number) => {
    const res = await axiosInstance.post('/users/cart', {
        userId, productId, quantity
    })
    return res.data;
}

export const getCart = async (userId: string) => {
    console.log("getting cart")
    const res = await axiosInstance.get(`/users/${userId}/cart`,)
    return res.data;
}
