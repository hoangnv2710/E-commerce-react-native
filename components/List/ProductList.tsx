import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ProductItem from "./ProductItem";
import { productType } from "@/types/global";

interface IProps {
    title?: string,
    data: productType[],
}
export default function ProductList(props: IProps) {
    const { title, data } = props;
    return (
        <View>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            <FlatList style={styles.container}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={data}
                scrollEnabled={false}
                renderItem={({ item }) => <ProductItem name={item.name} price={item.price} imageUrl={item.imageUrl} id={item._id} />}
                keyExtractor={(item) => item._id}
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
        paddingVertical: 10,
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
    },
})