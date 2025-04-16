import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Order from './Order';
import { APP_COLOR } from '@/utils/constant';

const data = [
    {
        orderID: "1",
        items: [
            { productID: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg"), quantity: 1 },
            { productID: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 2 },
        ]
    },
    {
        orderID: "2",
        items: [
            { productID: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg"), quantity: 3 },
            { productID: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },
        ]
    },
    {
        orderID: "3",
        items: [
            { productID: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg"), quantity: 4 },
            { productID: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },
        ]
    },
    {
        orderID: "4",
        items: [
            { productID: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg"), quantity: 4 },
            { productID: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg"), quantity: 1 },
        ]
    }

];

export default function OrderList() {
    return (
        <View style={{ paddingBottom: 20, }}>
            <FlatList data={data}
                scrollEnabled={false}
                keyExtractor={(item) => item.orderID}
                renderItem={({ item }) =>
                    <View style={styles.orderContainer}>
                        {/* <Text>{item.orderID}</Text> */}
                        <Order data={item.items} />
                    </View>

                } />
        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(0,0,255,0.1)",
    }
});