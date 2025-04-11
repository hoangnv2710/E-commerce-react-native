import ProductList from "@/components/HomePage/ProductList.Hompage";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Category() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <ProductList title="Phone" />
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    }
})