import axiosInstance from '@/utils/axiosInstance'

export const registerUser = async (name: string, email: string, password: string, phone: string, address: string) => {
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
    const res = await axiosInstance.get(`/users/${userId}/cart`)
    return res.data;
}

export const updateUser = async (userId: string, name: string, email: string, password: string, phone: string, address: string, imageUrl: string) => {
    const res = await axiosInstance.patch(`/users/${userId}`, {
        name, email, password, phone, address, imageUrl
    })
    return res.data;
}

export const uploadAvatar = async (formdata: FormData) => {
    console.log("uploading", formdata);
    const headers = { 'Content-Type': 'multipart/form-data' };
    const res = await axiosInstance.post('/users/avatar', formdata, { headers })
    return res.data;
}
