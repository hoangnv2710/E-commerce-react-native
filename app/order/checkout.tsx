import CustomBtn from '@/components/custom/Button.Custom';
import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Order from '@/components/List/Order';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { getCart } from '@/api/user.api';

const data = [
    { productID: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg"), quantity: 1 },
    { productID: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },
    { productID: "3", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg"), quantity: 2 },
    { productID: "4", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },
    { productID: "5", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg"), quantity: 4 },
    { productID: "6", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },
    { productID: "7", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg"), quantity: 2 },
    { productID: "8", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },

];

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

export default function CheckoutScreen() {
    const { user } = useAuth();
    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0)

    const fetchData = async () => {
        const data = await getCart(user._id);
        setCartData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        handleChangeTotal();
    }, [cartData]);

    const handleChangeTotal = () => {
        let totalPrice: number = 0;
        cartData.forEach((item: CartItem) => {
            totalPrice += item.product.price * item.quantity;
        })
        setTotal(totalPrice);
    }

    return (
        <SafeAreaView style={{ flex: 1, borderWidth: 2, borderColor: "red" }}>
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

                <Text style={styles.title}>Shopping options</Text>
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
                    <Text style={styles.totalPrice}>{total.toLocaleString()} VND</Text>
                </View>
                <View style={styles.checkoutBtn}>
                    <CustomBtn title="Pay Now" onPress={alert}
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
        borderWidth: 2,
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