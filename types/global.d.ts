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
        _id: string,
        name: string,
        price: string,
        image: number,
        quantity: number,
        imageUrl: string,
        category: string,
        description: string,
    }

    interface Product {
        _id: string,
        imageUrl: string,
        name: string,
        price: number,
    }
    interface CartItem {
        product: Product;
        quantity: number;
    }

    type OrderType = {
        userId: string,
        userDetail: {
            phone: string,
            address: string,
            name: string,
        },
        status: string,
        totalPrice: number,
        items: CartItem[];
        _id: string,
        createdAt: Date,
    }
}

export { productType, Product, CartItem, OrderType }
