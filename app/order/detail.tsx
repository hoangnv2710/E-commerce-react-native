import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Order from '@/components/List/Order';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { buyAgain, createOrder, getOrderById, patchOrderStatus } from '@/api/order.api';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useOrder } from '@/context/OrderContext';

export default function OrderDetail() {
    const { id } = useLocalSearchParams();
    const { fetchOrder } = useOrder();
    const { fetchCart } = useCart();
    const orderId = Array.isArray(id) ? id[0] : id;
    const { user } = useAuth();
    const [orderData, setOrderData] = useState<OrderType>()
    const [buttonTitle, setButtonTitle] = useState<string>("")
    const [handleButton, setHandleButton] = useState<() => void>(() => { })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getOrderById(orderId);
            setOrderData(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        // console.log(orderData?.status);
        if (orderData?.status == 'packing') {
            setButtonTitle("Cancel Order");
            setHandleButton(() => async () => {
                // alert("cancel");
                await patchOrderStatus(orderId, 'cancelled');
                await fetchOrder(user._id);
                router.replace({
                    pathname: '/order/ordersStatusList',
                    params: {
                        header: "History"
                    }
                })
            });
        } else if (orderData?.status == 'shipping') {
            setButtonTitle("Confirm Received");
            setHandleButton(() => async () => {
                await patchOrderStatus(orderId, 'delivered');
                await fetchOrder(user._id);
                router.replace({
                    pathname: '/order/ordersStatusList',
                    params: {
                        header: "History"
                    }
                })
            });
        }
        else {
            setButtonTitle("Buy Again");
            setHandleButton(() => async () => {
                // alert("Buy Again");
                // await buyAgain(user._id, orderData?.items ?? []);
                // await fetchCart(user._id);
                // router.replace('/(tabs)/cart');
                console.log("Bắt đầu buyAgain");
                const buyAgainResult = await buyAgain(user._id, orderData?.items ?? []);
                console.log("Kết thúc buyAgain, kết quả:", buyAgainResult);

                console.log("Bắt đầu fetchCart");
                const cartData = await fetchCart(user._id);
                console.log("Kết thúc fetchCart, dữ liệu giỏ hàng:", cartData);

                console.log("Thực hiện chuyển hướng");
                router.replace('/(tabs)/cart');
                console.log("Đã gọi router.replace")
            });
        }
    }, [orderData])

    return (
        <SafeAreaView style={{ flex: 1, borderColor: "red" }}>
            <Text style={styles.text} >Order detail</Text>

            <ScrollView style={styles.container}>
                <View style={styles.address} >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.title}>Delivery Address</Text>
                    </View>
                    <Text>{orderData?.userDetail.name}</Text>
                    <Text>{orderData?.userDetail.phone}</Text>
                    <Text>{orderData?.userDetail.address}</Text>
                </View>

                <Text style={styles.title}>Shopping list</Text>
                <Order data={orderData?.items ?? []} />

                <Text style={styles.title}>Shipping options</Text>
                <Text>Giao hàng nhanh</Text>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.title}>Payment Method</Text>
                    <Text>Cash On Delivery</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total </Text>
                    <Text style={styles.totalPrice}>{orderData?.totalPrice.toLocaleString() ?? 0} VND</Text>
                </View>
                <Pressable style={styles.footerBtn} onPress={() => handleButton()}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: "500"
                    }}> {buttonTitle} </Text>
                </Pressable>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    address: {
        // paddingLeft: 10,

    },
    title: {
        fontSize: 16, fontWeight: "500", marginTop: 10,
    },
    container: {
        // flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 5,
    },
    text: {
        marginTop: 10,
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500",

    },
    footer: {
        height: 100,
        backgroundColor: "#fff",
        // flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        elevation: 10,
        paddingHorizontal: 5,
    },
    totalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: "500",
        flex: 1,
        textAlign: "right"
    },
    total: {
        fontSize: 18,
        fontWeight: "bold",
    },
    footerBtn: {
        flex: 1, flexDirection: "row",
        alignItems: "center",
        // borderWidth: 2,
        justifyContent: "center",
        backgroundColor: APP_COLOR.DARK_BLUE,
        borderRadius: 10,
        width: "60%",
        alignSelf: "center",
        marginBottom: 10
        // paddingRight: 10
    },

});