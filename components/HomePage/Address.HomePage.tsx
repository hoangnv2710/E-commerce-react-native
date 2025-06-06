import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface IProps {
    address: string,
}

export default function Address(props: IProps) {
    const { address } = props;
    return (
        <View style={styles.address} >
            <Ionicons name="location-sharp" size={20} color="#fff" />
            <Text style={{
                paddingLeft: 4,
                color: "#fff",
                fontSize: 15,
                fontWeight: 500
            }} >
                {address}
                {/* 144 Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội */}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    address: {
        flexDirection: "row",
        paddingLeft: 15,
        paddingBottom: 10,
    }
});