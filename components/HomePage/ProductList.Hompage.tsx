import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ProductItem from "./ProductItem.HomePage";


const products = [
    { id: "1", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "2", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "3", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "4", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "5", name: "iPhone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg") },
    { id: "6", name: "MacBook Air", price: "25,000,000", image: require("@/assets/icons/phone.jpg") },
];

export default function ProductList() {
    return (
        <View>
            <Text style={styles.title} > Product List </Text>
            <FlatList style={styles.container}
                contentContainerStyle={{ gap: 5 }}
                columnWrapperStyle={{ gap: 5 }}
                data={products}
                scrollEnabled={false}
                renderItem={({ item }) => <ProductItem name={item.name} price={item.price} image={item.image} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        width: "100%",
        alignSelf: "center"
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5
    },
})