
import Address from "@/components/HomePage/Address.HomePage";
import Banner from "@/components/HomePage/Banner.HomePage";
import BestSeller from "@/components/HomePage/BestSellers.Hompage";
import Categories from "@/components/HomePage/Categories .HomePage";
import ProductList from "@/components/List/ProductList";
import SearchBar from "@/components/HomePage/SearchBar.HomePage";
import { FlatList, SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import { getAllProduct, getProductById } from "@/api/product.api";
import { useEffect, useState } from "react";


export default function HomePageTab() {

    const [productsData, setProductsData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProduct();
            setProductsData(data);
        }
        fetchData();

    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                <Address />
                {/* <View style={styles.line} /> */}
                <View style={styles.body}>
                    <Banner />
                    <Categories />
                    <BestSeller />
                    <ProductList title="Product list" data={productsData} />
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingTop: 10,
        width: "100%",
        backgroundColor: "#e6f5ff",
        paddingRight: "2%",
        paddingLeft: "2%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },



});
