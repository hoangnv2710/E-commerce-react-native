import { getCategory } from "@/api/product.api";
import ProductList from "@/components/List/ProductList";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Category() {
    const { name } = useLocalSearchParams();
    const category = Array.isArray(name) ? name[0] : name;

    const [data, setData] = useState<productType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getCategory(category);
            setData(res);
        }
        fetchData();
    }, [])

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.name}>{category}</Text>
            <ScrollView style={styles.container}>
                <ProductList data={data} />
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#e6f5ff",
        paddingRight: "2%",
        paddingLeft: "2%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 20,
    },
    name: {
        marginTop: 10,
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 5,
    },
})