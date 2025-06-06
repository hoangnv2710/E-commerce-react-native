import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import CustomBtn from '@/components/custom/Button.Custom';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';


export default function Tab() {
    const { user } = useAuth();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.userInfo}>
                <Image style={styles.avatar}
                    source={{ uri: `${process.env.EXPO_PUBLIC_SERVER_URL}${user.imageUrl}` }}
                />
                <Text style={styles.name} >{user.name}</Text>
                <View style={{ flex: 1, alignItems: "flex-end" }} >
                    <CustomBtn onPress={() => router.push('/(auth)/userDetail')}
                        btnStyle={{
                            backgroundColor: "transparent",
                            borderWidth: 0,
                        }}
                        icon={<Feather name="edit" size={24} color={APP_COLOR.LIGHT_BLUE} />} />
                </View>
            </View>

            <View style={styles.container}>
                <View style={{
                    backgroundColor: "#fff",
                    marginTop: 10, borderRadius: 10, borderColor: APP_COLOR.LIGHT_BLUE, shadowColor: '#000',
                    elevation: 10,
                    // borderWidth: 2,
                }}>
                    <Text style={{ paddingLeft: 20, fontSize: 18, paddingVertical: 8 }}>My order</Text>
                    <View style={styles.orderTabs}>
                        <CustomBtn title="Packing" onPress={() =>
                            router.push({
                                pathname: '/order/ordersStatusList',
                                params: {
                                    header: "Packing"
                                }
                            })

                        }
                            icon={<Entypo name="box" size={24} color={APP_COLOR.MEDIUM_BLUE} />}
                            btnStyle={styles.orderBtn}
                            textStyle={{ margin: 0, }} />
                        <CustomBtn title="Shipping" onPress={() =>
                            router.push({
                                pathname: '/order/ordersStatusList',
                                params: {
                                    header: "Shipping"
                                }
                            })
                        }
                            icon={<FontAwesome5 name="shipping-fast" size={24} color={APP_COLOR.MEDIUM_BLUE} />}
                            btnStyle={styles.orderBtn}
                            textStyle={{ margin: 0, }} />
                        <CustomBtn title="History" onPress={() =>
                            router.push({
                                pathname: '/order/ordersStatusList',
                                params: {
                                    header: "History"
                                }
                            })
                        }
                            icon={<FontAwesome name="history" size={24} color={APP_COLOR.MEDIUM_BLUE} />}
                            btnStyle={styles.orderBtn}
                            textStyle={{ margin: 0, }} />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    userInfo: {
        marginTop: 10,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: APP_COLOR.MEDIUM_BLUE
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    name: {
        marginTop: 10,
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500",
        width: 250
    },

    orderTabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderColor: "#ccc"
    },
    orderBtn: {
        flexDirection: "column",
        borderWidth: 0,
        gap: 5,
        width: " 100%",
        paddingVertical: 10,
    }

});