import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

interface IProps {
    name: string,
    price: number,
    imageUrl: string,
    quantity: number,
}

export default function OrderItem(props: IProps) {
    const { name, price, imageUrl, quantity } = props;
    return (
        <View style={styles.item}>
            <View style={styles.imgContainer} >
                <Image source={{ uri: imageUrl }}
                    style={styles.image} />
            </View>

            <View style={styles.detail}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.price}>{price.toLocaleString()}</Text>
            </View>

            <View style={styles.quantity}>
                <Text>x{quantity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        height: 90,
        flex: 1,
        borderColor: APP_COLOR.MEDIUM_BLUE,
        borderRadius: 5,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // marginVertical: 3,
    },
    imgContainer: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 5,
        // borderWidth: 1,
        paddingVertical: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(0,0,255,0.1)",
        // elevation: 3,
        // borderWidth: 1,
        // borderColor: APP_COLOR.LIGHT_BLUE,
    },
    detail: {
        flex: 2,
        // borderWidth: 1 
    },
    name: {
        fontWeight: "500",
        fontSize: 18,
    },
    price: {
        color: APP_COLOR.DARK_BLUE,
        fontWeight: "500",
        fontSize: 15
    },

    quantity: {
        flex: 1,
        alignItems: "center"
    },


});