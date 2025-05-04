import CustomBtn from '@/components/custom/Button.Custom';
import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Order from '@/components/List/Order';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { createOrder, getOrderById } from '@/api/order.api';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export default function OrderDetail() {
    const { id } = useLocalSearchParams();
    const orderId = Array.isArray(id) ? id[0] : id;
    const [orderData, setOrderData] = useState<OrderType>()
    const [buttonTitle, setButtonTitle] = useState<string>("")
    const [handleButton, setHandleButton] = useState<() => void>(() => { })
    // let handleButton = () => { };
    useEffect(() => {
        const fetchData = async () => {
            const data = await getOrderById(orderId);
            setOrderData(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (orderData?.status == 'packing') {
            setButtonTitle("Cancel Order");
            setHandleButton(() => () => {
                alert("cancel");
            });
        } else if (orderData?.status == 'shipping') {
            setButtonTitle("Confirm Received");
            setHandleButton(() => () => {
                alert("confirmReceived");
            });
        }
        // else if (orderData?.status == 'delivered') {
        //     buttonTitle = "Buy Again";
        //     handleButton = async () => {
        //         alert("Buy Again");
        //     }
        // }
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

            <View style={styles.checkout}>
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total </Text>
                    <Text style={styles.totalPrice}>{orderData?.totalPrice.toLocaleString() ?? 0} VND</Text>
                </View>
                <View style={styles.checkoutBtn}>
                    <CustomBtn title={buttonTitle} onPress={() => handleButton()}
                        textStyle={{
                            color: "#fff",
                            fontSize: 18,
                        }}
                        btnStyle={{
                            backgroundColor: APP_COLOR.DARK_BLUE,
                            borderWidth: 0,
                            padding: 5,
                            paddingHorizontal: 10
                        }}
                    />
                </View>
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
    checkout: {
        height: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        elevation: 10,
    },
    totalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: "bold",
        // color: APP_COLOR.DARK_BLUE
    },
    total: {
        fontSize: 20,
        fontWeight: "500",
    },
    checkoutBtn: {
        flex: 1, flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 10
    },

});