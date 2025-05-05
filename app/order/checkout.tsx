import CustomBtn from '@/components/custom/Button.Custom';
import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Order from '@/components/List/Order';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { createOrder } from '@/api/order.api';
import { router } from 'expo-router';
import { useState } from 'react';
import { useOrder } from '@/context/OrderContext';


export default function CheckoutScreen() {
    const { user } = useAuth();
    const { cartData, fetchCart, setCartData, totalPrice } = useCart();
    const { fetchOrder } = useOrder();
    const [wait, setWait] = useState<boolean>(false);

    const handlePayment = async () => {
        if (!wait) {
            try {
                setWait(true);
                await createOrder(user._id, totalPrice);
                fetchCart(user._id);
                await fetchOrder(user._id);
                router.replace({
                    pathname: '/order/ordersStatusList',
                    params: {
                        header: "Packing"
                    }
                })
            } catch (error) {
                console.log(error)
            } finally {
                setWait(false);
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, borderColor: "red" }}>
            <Text style={styles.text} >Checkout</Text>

            <ScrollView style={styles.container}>
                <View style={styles.address} >
                    <View style={{ flexDirection: "row" }}>
                        {/* <EvilIcons name="location" size={24} color="black" /> */}
                        <Text style={styles.title}>Delivery Address</Text>
                    </View>
                    <Text >{user.name}</Text>

                    <Text  >
                        144 Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                    </Text>
                </View>

                <Text style={styles.title}>Shopping list</Text>
                <Order data={cartData} />

                <Text style={styles.title}>Shipping options</Text>
                <Text>Giao hàng nhanh</Text>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.title}>Payment Method</Text>
                    <Text>Cash On Delivery</Text>
                </View>

                {/* <Text style={styles.title}></Text> */}
            </ScrollView>


            <View style={styles.checkout}>
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total </Text>
                    <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} VND</Text>
                </View>
                <View style={styles.checkoutBtn}>
                    <CustomBtn title="Pay Now" onPress={handlePayment}
                        textStyle={{
                            color: "#fff",
                            fontSize: 18,

                        }}
                        btnStyle={{
                            backgroundColor: APP_COLOR.DARK_BLUE,
                            borderWidth: 0,
                            padding: 5,
                            paddingHorizontal: 20
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
        paddingLeft: 20
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
        paddingRight: 20
    },

});