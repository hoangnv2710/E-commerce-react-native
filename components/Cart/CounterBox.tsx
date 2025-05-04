import AntDesign from '@expo/vector-icons/AntDesign';
import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, Pressable, Alert, ToastAndroid } from 'react-native';
import { useState } from 'react';
import { addToCart } from '@/api/user.api';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

interface IProps {
    value: number,
    productId: string,
    // updateQuantity: (userId: string) => void,

}

export default function CounterBox(props: IProps) {
    const { fetchCart } = useCart();
    const [wait, setWait] = useState<boolean>(false)

    const { value, productId } = props;
    const { user } = useAuth();
    const showMyAlert = () => {
        Alert.alert(
            "Do you want to remove this product from your cart?",
            "Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không?",
            [
                {
                    text: "Yes",
                    onPress: async () => {
                        const res = await addToCart(user._id, productId, -1);
                        fetchCart(user._id);
                    },
                    style: "cancel"
                },
                {
                    text: "No",
                    onPress: async () => {
                        // const res = await addToCart(user._id, productId, 1 - value);
                        // fetchCart(user._id);
                    },
                    style: "default"
                }
            ],
            { cancelable: false }
        );
    }

    const onIncrease = async () => {
        const res = await addToCart(user._id, productId, 1);
        fetchCart(user._id);

    }

    const onDecrease = async () => {
        if (!wait) {
            try {
                setWait(true);
                if (value > 1) {
                    await addToCart(user._id, productId, -1);
                    await fetchCart(user._id);
                } else {
                    showMyAlert();
                }
            } catch (error) {
                console.log("error")
            } finally {
                setWait(false);
            }
        }
    }

    return (
        <View style={styles.counterBox} >
            <Pressable onPress={onIncrease} style={styles.counterBtn} >
                <AntDesign name="plussquare" size={24} color={APP_COLOR.DARK_BLUE} />
            </Pressable>

            <Text style={styles.quantity}>{value}</Text>
            {/* <TextInput style={styles.quantity} keyboardType='number-pad' defaultValue='0' /> */}
            <Pressable onPress={onDecrease} style={styles.counterBtn} >
                <AntDesign name="minussquare" size={24} color={APP_COLOR.DARK_BLUE} />
            </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    counterBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // borderWidth: 1,
        justifyContent: "flex-end",
        paddingRight: 5,

    },
    counterBtn: {
        padding: 5,
    },
    quantity: {
        fontSize: 20
    },

});