import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from "expo-router";


export default function SearchBar() {
    return (
        <Pressable onPress={() => { router.navigate('/search') }} >
            <View style={styles.container}>
                <View style={styles.searchInput} >
                    <FontAwesome name="search" size={24} color="blue" paddingRight="10" />
                    <Text style={{
                        color: "blue",
                        fontSize: 20,
                        fontWeight: 400
                    }} >
                        Type to search
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "blue",
        height: 80,
    },
    searchInput: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        height: 40,
        width: "95%",
        paddingLeft: 10,
        marginTop: 25,
        backgroundColor: "#fff",
        borderRadius: 15
    }
});