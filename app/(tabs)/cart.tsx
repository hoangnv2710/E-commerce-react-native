import { getCart } from '@/api/user.api';
import CounterBox from '@/components/Cart/CounterBox';
import CustomBtn from '@/components/custom/Button.Custom';
import { useAuth } from '@/context/app.context';
import { APP_COLOR } from '@/utils/constant';
import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput } from 'react-native';


export default function Tab() {
    const { user } = useAuth();
    const [cartData, getCartData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCart(user._id);
            getCartData(data);
            console.log(data);
        }
        fetchData();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.text} >My Cart</Text>

            <View style={styles.container}>
                {/* <ScrollView></ScrollView> */}
                <FlatList data={cartData}
                    // scrollEnabled={false}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            <View style={styles.imgContainer} >
                                <Image source={{ uri: item.product.imageUrl }}
                                    style={styles.image} />
                            </View>

                            <View style={styles.detail}>
                                <Text style={styles.name}>{item.product.name}</Text>
                                <Text style={styles.price}>{item.product.price.toLocaleString()}</Text>
                            </View>
                            <View style={styles.counterContainer}>
                                <CounterBox value={item.quantity} />
                            </View>
                        </View>}
                    keyExtractor={(item) => item.product._id} />
            </View>

            <View style={styles.checkout}>
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total </Text>
                    <Text style={styles.totalPrice}>0.0VND</Text>
                </View>
                <View style={styles.checkoutBtn}>
                    <CustomBtn title="Check Out" onPress={() => { router.navigate("/order/checkout") }}
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
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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

    item: {
        height: 100,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: APP_COLOR.OPACITY,
        borderRadius: 5,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        // alignContent: "center"
    },
    imgContainer: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 5,
        // borderWidth: 1,
        paddingVertical: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(0,0,255,0.1)",
        // elevation: 3,
        // borderWidth: 1,
        // borderColor: APP_COLOR.LIGHT_BLUE,
    },
    detail: {
        flex: 1,
        // borderWidth: 1 
    },
    name: {
        fontWeight: "500",
        fontSize: 18,
    },
    price: {
        color: APP_COLOR.DARK_BLUE,
        fontWeight: "500",
        fontSize: 15
    },

    counterContainer: {
        flex: 1,
        alignItems: "center"
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