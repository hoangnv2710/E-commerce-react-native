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
