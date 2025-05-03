declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
}

declare module '*.jpg' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
}

declare global {
    type productType = {
        __v: number,
        _id: String,
        name: string,
        price: string,
        image: number,
        quantity: number,
        imageUrl: String,
        category: String,
        description: String,
    }
}

export { productType }
