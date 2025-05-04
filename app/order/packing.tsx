import { getOrder } from '@/api/order.api';
import OrderList from '@/components/List/OrderList';
import { useAuth } from '@/context/AuthContext';
import { APP_COLOR } from '@/utils/constant';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput, Dimensions } from 'react-native';

type OrderType = {
    status: string,
    totalPrice: number,
    items: CartItem[];
    _id: string,
    createdAt: Date,
}

export default function Packing() {
    const { user } = useAuth();
    const [packingOrders, setPackingOrders] = useState<OrderType[]>([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrder(user._id, 'packing');
            setPackingOrders(data);
            // console.log(packingOrders)
        }
        fetchOrders();
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, borderColor: "red" }}>
            <Text style={styles.text} >Packing</Text>
            <ScrollView style={styles.container}>
                <OrderList orders={packingOrders} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    address: {
        // paddingLeft: 10,

    },
    title: {
        fontSize: 16, fontWeight: "500", marginTop: 10,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        backgroundColor: APP_COLOR.LIGHT_BLUE,

        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        marginTop: 10,
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500"
    },


});