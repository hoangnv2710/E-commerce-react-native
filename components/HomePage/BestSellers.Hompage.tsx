import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "../List/ProductItem";
const products = [

];
export default function BestSeller() {
    return (
        <View>
            <Text style={styles.title} > Best Sellers </Text>
            <FlatList
                style={styles.list}
                contentContainerStyle={{ gap: 10 }}
                data={products}
                renderItem={({ item }) => <ProductItem
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    itemStyle={{ width: 180, height: 250 }} />}
                keyExtractor={(item) => item.id}
                horizontal
            >

            </FlatList>
        </View>

    )
}

const styles = StyleSheet.create({
    list: {
        marginBottom: 10,
        height: 250,
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5
    },
})