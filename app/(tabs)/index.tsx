
import Address from "@/components/HomePage/Address.HomePage";
import Banner from "@/components/HomePage/Banner.HomePage";
import BestSeller from "@/components/HomePage/BestSellers.Hompage";
import Categories from "@/components/HomePage/Categories .HomePage";
import ProductList from "@/components/HomePage/ProductList.Hompage";
import SearchBar from "@/components/HomePage/SearchBar.HomePage";
import { Redirect } from "expo-router";

import { FlatList, SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";


export default function HomePageTab() {

    return (
        // <SafeAreaView style={styles.container}>
        <View>
            <SearchBar />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Address />
                {/* <View style={styles.line} /> */}
                <View style={styles.body}>
                    <Banner />
                    <Categories />
                    <BestSeller />
                    <ProductList />
                </View>

            </ScrollView>
        </View>

        // </SafeAreaView>
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

    list: {
        overflow: "hidden"
    },

});
