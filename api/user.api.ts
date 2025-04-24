import axiosInstance from '@/utils/axiosInstance'

export const registerUser = async (email: string, password: string, name: string) => {
    const res = await axiosInstance.post('/users/register', {
        email: email,
        password: password,
        name: name,
    });
    return res.data;
}
