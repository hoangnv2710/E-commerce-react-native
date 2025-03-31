
import Address from "@/components/HomePage/Address.HomePage";
import Banner from "@/components/HomePage/Banner.HomePage";
import BestSeller from "@/components/HomePage/BestSellers.Hompage";
import Categories from "@/components/HomePage/Categories .HomePage";
import ProductList from "@/components/HomePage/ProductList.Hompage";
import SearchBar from "@/components/HomePage/SearchBar.HomePage";
import { FlatList, SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";


export default function HomePageTab() {

    return (
        <SafeAreaView style={styles.container}>
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
        backgroundColor: "#d0d8ff",
        paddingRight: "2%",
        paddingLeft: "2%",

    },
    line: {
        width: "100%",
        height: 5,
        backgroundColor: "#869bff"
    },
    list: {
        overflow: "hidden"
    },

});
