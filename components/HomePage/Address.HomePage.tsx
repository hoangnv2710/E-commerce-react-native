import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Address() {
    return (
        <View style={styles.address} >
            <Ionicons name="location-sharp" size={20} color="#fff" />
            <Text style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: 500
            }} >
                144 Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    address: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingBottom: 10,
    }
});