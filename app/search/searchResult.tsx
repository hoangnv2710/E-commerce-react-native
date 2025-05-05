import SearchBar from "@/components/HomePage/SearchBar.HomePage";
import ProductList from "@/components/List/ProductList";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { searchProduct } from "@/api/product.api";

export default function searchResult() {
    const { query } = useLocalSearchParams();
    const normalizedQuery = Array.isArray(query) ? query[0] : query;
    const [searchResult, setSearchResult] = useState<productType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await searchProduct(normalizedQuery);
            setSearchResult(data);
        }
        fetchData();
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar inputValue={normalizedQuery} />
            <ScrollView style={styles.container}>
                <ProductList data={searchResult} />
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
})