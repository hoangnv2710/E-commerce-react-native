import { APP_COLOR } from '@/utils/constant';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomBtn from '@/components/custom/Button.Custom';


const data = [
    { id: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg") },
    { id: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
    { id: "3", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "4", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
    { id: "5", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "6", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
    { id: "7", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "8", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },

];

export default function Tab() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.text} >My Cart</Text>

            <View style={styles.container}>
                <ScrollView>
                    <FlatList data={data}
                        scrollEnabled={false}
                        renderItem={({ item }) =>
                            <View style={styles.item}>
                                <View style={styles.imgContainer} >
                                    <Image source={item.image}
                                        style={styles.image} />
                                </View>

                                <View style={styles.detail}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>

                                <View style={styles.counterBox} >
                                    <Pressable onPress={() => { alert() }} style={styles.counterBtn} >
                                        <AntDesign name="plussquare" size={24} color={APP_COLOR.DARK_BLUE} />
                                    </Pressable>

                                    <Text style={styles.quantity}>0</Text>

                                    <Pressable onPress={() => { alert() }} style={styles.counterBtn} >
                                        <AntDesign name="minussquare" size={24} color={APP_COLOR.DARK_BLUE} />
                                    </Pressable>


                                </View>

                            </View>}
                        keyExtractor={(item) => item.id} />
                </ScrollView>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
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
        borderWidth: 1,
        borderColor: APP_COLOR.MEDIUM_BLUE,
        borderRadius: 20,
        paddingLeft: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // alignContent: "center"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 2,
    },
    detail: { flex: 1 },
    name: {},
    price: {},
    imgContainer: {
        flex: 1,
    },
    counterBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        justifyContent: "flex-end",
        paddingRight: 5,
    },
    counterBtn: {
        padding: 5,
    },
    quantity: {
        fontSize: 20
    }
});