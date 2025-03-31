import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface IProps {
    name: string,
    price: string,
    image: number,
}

export default function ProductItem(props: IProps) {
    const { name, price, image } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={image}
                style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price} VND</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        backgroundColor: "#fff",
        // margin: 5,
        borderRadius: 10,
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    price: {
        color: "red",
        marginTop: 5,
    },
});


