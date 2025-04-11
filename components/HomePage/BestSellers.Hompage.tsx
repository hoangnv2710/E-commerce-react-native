import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "./ProductItem.HomePage";
const products = [
    { id: "1", name: "iPhone 14", price: "20", image: require("@/assets/icons/phone.jpg") },
    { id: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
    { id: "3", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "4", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
    { id: "5", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "6", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
    { id: "7", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "8", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/mac.jpg") },
];
export default function BestSeller() {
    return (
        <View>
            <Text style={styles.title} > Best Sellers </Text>
            <FlatList
                style={styles.container}
                contentContainerStyle={{ gap: 10 }}
                data={products}
                renderItem={({ item }) => <ProductItem
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    itemStyle={{ width: 180 }} />}
                keyExtractor={(item) => item.id}
                horizontal
            >

            </FlatList>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flex: 1,
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5
    },
})