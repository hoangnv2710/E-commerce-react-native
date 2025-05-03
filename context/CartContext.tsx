import { getCart } from "@/api/user.api";
import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
    _id: string,
    imageUrl: string,
    name: string,
    price: number,
}
interface CartItem {
    product: Product,
    quantity: number,
}

interface CartContextType {
    cartData: CartItem[];
    setCartData: (data: CartItem[]) => void;
    fetchCart: (userId: string) => void
}
interface CartContextProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: CartContextProps) => {
    const [cartData, setCartData] = useState<CartItem[]>([]);
    console.log(cartData);
    const fetchCart = async (userId: string) => {
        const data = await getCart(userId);
        setCartData(data);
    }

    return (
        <CartContext.Provider value={{ fetchCart, cartData, setCartData }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        console.log('useCart must be used within an CartProvider');
        throw new Error('useCart must be used within an CartProvider');
    }
    return context;
}

