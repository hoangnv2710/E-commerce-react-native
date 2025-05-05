import { getCart } from "@/api/user.api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartContextType {
    cartData: CartItem[],
    setCartData: (data: CartItem[]) => void,
    fetchCart: (userId: string) => void,
    totalPrice: number,
}
interface CartContextProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: CartContextProps) => {
    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const fetchCart = async (userId: string) => {
        const data = await getCart(userId);
        setCartData(data);
    }

    useEffect(() => {
        handleChangeTotal();
    }, [cartData]);

    const handleChangeTotal = () => {
        let total: number = 0;
        cartData.forEach((item: CartItem) => {
            total += item.product.price * item.quantity;
        })
        setTotalPrice(total);
        console.log("change")
    }

    return (
        <CartContext.Provider value={{ fetchCart, cartData, setCartData, totalPrice }} >
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

