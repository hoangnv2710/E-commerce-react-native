import CustomBtn from '@/components/custom/Button.Custom';
import Address from '@/components/HomePage/Address.HomePage';
import OrderList from '@/components/List/OrderList';
import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Pressable, TextInput, Dimensions } from 'react-native';



export default function Packing() {

    return (
        <SafeAreaView style={{ flex: 1, borderWidth: 2, borderColor: "red" }}>
            <Text style={styles.text} >Packing</Text>
            <ScrollView style={styles.container}>
                <OrderList />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    address: {
        // paddingLeft: 10,

    },
    title: {
        fontSize: 16, fontWeight: "500", marginTop: 10,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        borderWidth: 2, borderColor: "green",
        backgroundColor: APP_COLOR.LIGHT_BLUE,

        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        marginTop: 10,
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500"
    },


});