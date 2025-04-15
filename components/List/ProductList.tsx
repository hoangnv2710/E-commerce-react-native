import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ProductItem from "./ProductItem";


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
interface IProps {
    title?: string,
}
export default function ProductList(props: IProps) {
    const { title } = props;
    return (
        <View>
            <Text style={title ? styles.title : {}} > {title} </Text>
            <FlatList style={styles.container}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
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
        alignSelf: "center",
        paddingBottom: 10,
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5
    },
})