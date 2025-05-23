import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import Order from './Order';
import { APP_COLOR } from '@/utils/constant';
import { router } from 'expo-router';

interface IProps {
    orders: OrderType[];
}

export default function OrderList(props: IProps) {
    const { orders } = props;
    return (
        <View style={{ paddingBottom: 20, }}>
            <FlatList data={orders}
                scrollEnabled={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) =>
                    <Pressable onPress={() => {
                        router.push({
                            pathname: '/order/detail',
                            params: { id: item._id }
                        })
                    }}>
                        <View style={styles.orderContainer}>
                            <View style={styles.header}>
                                <Text>ID: {item._id}</Text>
                                <Text style={styles.status}>{item.status}</Text>

                            </View>
                            <Order data={item.items} />
                        </View>
                    </Pressable>
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderColor: "rgba(0,0,255,0.1)",
    },
    header: {
        // borderWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    status: {
        color: APP_COLOR.DARK_BLUE,
        fontSize: 16,
        fontWeight: 500,
        alignSelf: "flex-end",
        flex: 1,
        textAlign: "right"
    }
});