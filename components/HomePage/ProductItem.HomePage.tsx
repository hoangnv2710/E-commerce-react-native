import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, Pressable } from "react-native";


interface IProps {
    name: string,
    price: string,
    image: number,
    itemStyle?: StyleProp<ViewStyle>,
}

export default function ProductItem(props: IProps) {
    const { name, price, image, itemStyle } = props;
    return (
        <Pressable onPress={() => { router.navigate("/product/id") }}
            style={[styles.container, itemStyle]}>
            {/*  */}
            <Image
                source={image}
                style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price} VND</Text>
            </View>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        overflow: "hidden",
        width: "49%",
        height: 250,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 10,
    },
    infoContainer: {
        width: "100%",
        paddingLeft: 10,
        justifyContent: "flex-start",
    },
    name: {
        fontSize: 16,
        // fontWeight: "bold",
        marginTop: 5,
    },
    price: {
        color: "red",
        marginTop: 5,
        fontWeight: "500",
        fontSize: 16
    },
});


