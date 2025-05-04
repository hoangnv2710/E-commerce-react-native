
import { getOrdersByUserStatus } from "@/api/order.api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface OrderContextType {
    orderData: OrderType[],
    setOrderData: (data: OrderType[]) => void,
    fetchOrder: (userId: string) => void,
    getOrderByStatus: (status: string[]) => OrderType[],
    packingOrders: OrderType[],
    shippingOrders: OrderType[],
    historyOrders: OrderType[],
}
interface OrderContextProps {
    children: ReactNode;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export const OrderProvider = ({ children }: OrderContextProps) => {
    const [orderData, setOrderData] = useState<OrderType[]>([]);
    const [packingOrders, setPackingOrders] = useState<OrderType[]>([]);
    const [shippingOrders, setShippingOrders] = useState<OrderType[]>([]);
    const [historyOrders, setHistoryOrders] = useState<OrderType[]>([]);

    const fetchOrder = async (userId: string) => {
        const data = await getOrdersByUserStatus(userId, '');
        setOrderData(data);
    }


    useEffect(() => {
        setPackingOrders(getOrderByStatus(['packing']));
        // console.log(packingOrders)
        setShippingOrders(getOrderByStatus(['shipping']));
        console.log(historyOrders)
        setHistoryOrders(getOrderByStatus(['delivered', 'cancelled']));
    }, [orderData])

    const getOrderByStatus = (status: string[]) => {
        const data = orderData.filter(order => {
            // console.log(status.includes(order.status))
            return status.includes(order.status)
        })
        // console.log(data);
        return data;
    }
    return (
        <OrderContext.Provider value={{ fetchOrder, orderData, setOrderData, getOrderByStatus, packingOrders, shippingOrders, historyOrders, }}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        console.log('useCart must be used within an CartProvider');
        throw new Error('useCart must be used within an CartProvider');
    }
    return context;
}

