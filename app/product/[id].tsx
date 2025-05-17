import CustomBtn from "@/components/custom/Button.Custom";
import { APP_COLOR } from "@/utils/constant";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getProductById } from "@/api/product.api";
import { useAuth } from "@/context/AuthContext";
import { addToCart } from "@/api/user.api";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const { user } = useAuth();
    const { fetchCart } = useCart();

    const productId = Array.isArray(id) ? id[0] : id;
    const [detail, setDetail] = useState<any>(null);
    // const{ fe}.fetchCart(user._id);

    useEffect(() => {
        if (!productId) return;
        const fetchData = async () => {
            const data = await getProductById(productId);
            setDetail(data);
        }
        fetchData();
    }, [productId])

    const handleAddToCart = async () => {
        const result = await addToCart(user._id, productId, 1);
        fetchCart(user._id);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {detail?.imageUrl ? (<>
                <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                    <View style={styles.container}>
                        <View style={{ width: "100%" }}>
                            <Image
                                source={{ uri: detail.imageUrl }}
                                style={styles.image} />
                        </View>


                        <View style={styles.infoContainer}>
                            <Text style={styles.price}>{detail.price.toLocaleString()} VND</Text>
                            <Text style={styles.name}>{detail.name}</Text>


                            <Text style={styles.description} >Description</Text>
                            <Text style={{ fontSize: 18 }} >{detail.description} </Text>
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.checkout}>
                    <View style={styles.totalContainer}>
                        {/* <Text style={styles.total}>Total </Text> */}
                        <Text style={styles.totalPrice}> {detail.price.toLocaleString()} VND</Text>
                    </View>
                    <View style={styles.checkoutBtn}>
                        <CustomBtn title=" Add to cart"
                            onPress={handleAddToCart}
                            btnStyle={{

                                padding: 8,
                                borderWidth: 0,
                                backgroundColor: APP_COLOR.DARK_BLUE
                            }}
                            textStyle={{
                                color: "#fff",
                                fontSize: 18
                            }}
                            icon={<FontAwesome name="shopping-cart" size={24} color="#fff" />} />
                    </View>
                </View>
            </>) :
                (<Text style={{ flex: 1, textAlign: "center", fontSize: 30, paddingTop: 300, color: "#fff" }}>Loading...</Text>)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        overflow: "hidden",
        flex: 1,
        marginTop: 20,
    },
    image: {
        // width: "100%",
        height: 300,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    infoContainer: {
        width: "100%",
        paddingHorizontal: 10,
        justifyContent: "flex-start",
    },
    name: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 5,
        paddingBottom: 5,
    },
    price: {
        color: APP_COLOR.DARK_BLUE,
        marginTop: 10,
        fontWeight: "500",
        fontSize: 20,

    },
    description: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 5,
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: "#ccc"
    },
    checkout: {
        height: 60,
        flexDirection: "row",
        elevation: 10,
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
    },
    totalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: "bold",
        color: APP_COLOR.DARK_BLUE
    },
    total: {
        fontSize: 26,
        fontWeight: "500",

    },
    checkoutBtn: {
        flex: 1, flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20
    },
});
