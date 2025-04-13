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
                        numColumns={6}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={data1}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable onPress={() => { router.navigate("/category") }}>
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
    { key: 1, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 2, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 3, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 4, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 5, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 6, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 7, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 8, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 9, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 10, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 11, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    { key: 12, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 13, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 14, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 15, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 16, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 17, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 18, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 19, name: "Phone", source: require("@/assets/icons/phone.jpg") },
    // { key: 20, name: "Phone", source: require("@/assets/icons/phone.jpg") },
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
        paddingVertical: 2,
        alignSelf: "center",
        minHeight: 100,
        marginBottom: 10,
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: 10,
    }
});