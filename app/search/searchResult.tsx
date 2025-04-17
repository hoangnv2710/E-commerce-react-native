import SearchBar from "@/components/HomePage/SearchBar.HomePage";
import ProductList from "@/components/List/ProductList";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function searchResult() {
    const { query } = useLocalSearchParams();

    const normalizedQuery = Array.isArray(query) ? query[0] : query;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar inputValue={normalizedQuery} />
            <ScrollView style={styles.container}>
                <ProductList />
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