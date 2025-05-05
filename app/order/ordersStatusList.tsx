import OrderList from "@/components/List/OrderList";
import { useAuth } from "@/context/AuthContext";
import { useOrder } from "@/context/OrderContext";
import { APP_COLOR } from "@/utils/constant";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function OrdersStatusList() {
    const { user } = useAuth();
    const { fetchOrder, packingOrders, shippingOrders, historyOrders, orderData } = useOrder();
    const { header } = useLocalSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            await fetchOrder(user._id);
        }
        fetchData();
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, borderColor: "red" }}>
            <Text style={styles.text} >{header}</Text>
            <ScrollView style={styles.container}>
                {
                    header == 'Packing' ?
                        (<OrderList orders={packingOrders} />) : header == 'Shipping' ?
                            (<OrderList orders={shippingOrders} />)
                            : (<OrderList orders={historyOrders} />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    },
    text: {
        marginTop: 10,
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500"
    },


});