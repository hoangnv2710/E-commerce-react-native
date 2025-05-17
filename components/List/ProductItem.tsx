import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, Pressable } from "react-native";


interface IProps {
    id: string,
    name: string,
    price: string,
    imageUrl: string,
    itemStyle?: StyleProp<ViewStyle>,
}

export default function ProductItem(props: IProps) {
    const { id, name, price, imageUrl, itemStyle } = props;
    return (
        <Pressable onPress={() => {
            router.push({
                pathname: "/product/[id]",
                params: { id },
            });
        }}
            style={[styles.container, itemStyle]}>
            {/*  */}
            <Image
                // source={image}
                source={{ uri: imageUrl }}
                style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.price}>{price.toLocaleString()} VND</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        // overflow: "hidden",
        width: "49%",
        height: 250,
        borderWidth: 1,
        borderColor: "rgba(0,0,255,0.1)",
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
        color: APP_COLOR.DARK_BLUE,
        marginTop: 5,
        fontWeight: "500",
        fontSize: 16
    },
});


