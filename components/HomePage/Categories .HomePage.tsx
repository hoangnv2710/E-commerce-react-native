import { router } from "expo-router";
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable } from "react-native";


export default function Categories() {
    return (
        <View  >
            <Text style={styles.title} > All Categories </Text>
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                    alwaysBounceVertical={false}
                >
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        // numColumns={Math.ceil(data1.length / 2)}
                        numColumns={5}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={data1}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable onPress={() => {
                                    router.navigate({
                                        pathname: "/category",
                                        params: { name: item.name }
                                    })
                                }}>
                                    <View style={{
                                        margin: 0,
                                        width: 100, height: 100,
                                        alignItems: "center",
                                        // borderWidth: 1,
                                    }}>
                                        <Image source={item.source}
                                            style={{
                                                width: 80,
                                                height: 80
                                            }}
                                        />
                                        <Text>{item.name}</Text>
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const data1 = [
    { key: 1, name: "Phone", source: require("@/assets/icons/Phone.jpg") },
    { key: 2, name: "Laptop", source: require("@/assets/icons/Laptop.jpg") },
    { key: 3, name: "Milk", source: require("@/assets/icons/Milk.jpg") },
    { key: 4, name: "Tablet", source: require("@/assets/icons/Tablet.jpg") },
    { key: 5, name: "Sports", source: require("@/assets/icons/Sports.jpg") },
    { key: 6, name: "Beauty", source: require("@/assets/icons/Beauty.jpg") },
    { key: 7, name: "Book", source: require("@/assets/icons/Book.jpg") },
    { key: 8, name: "Electronics", source: require("@/assets/icons/Electronics.jpg") },
    { key: 9, name: "Home Appliances", source: require("@/assets/icons/Home Appliances.jpg") },
    { key: 10, name: "Fashion", source: require("@/assets/icons/Fashion.jpg") },

]


const styles = StyleSheet.create({

    list: {
        // overflow: "hidden",

    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5
    },
    container: {
        // borderColor: "orange",
        // borderWidth: 5,
        // overflow: "hidden",
        paddingVertical: 10,
        alignSelf: "center",
        minHeight: 100,
        marginBottom: 10,
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: 10,
    }
});