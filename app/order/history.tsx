import { getOrdersByUserStatus } from '@/api/order.api';
import OrderList from '@/components/List/OrderList';
import { useAuth } from '@/context/AuthContext';
import { APP_COLOR } from '@/utils/constant';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function History() {
    const { user } = useAuth();
    const [orders, setOrders] = useState<OrderType[]>([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrdersByUserStatus(user._id, 'delivered');
            setOrders(data);
            // console.log(Orders)
        }
        fetchOrders();
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, borderColor: "red" }}>
            <Text style={styles.text} >History</Text>
            <ScrollView style={styles.container}>
                <OrderList orders={orders} />
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