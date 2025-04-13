import AntDesign from '@expo/vector-icons/AntDesign';
import { APP_COLOR } from '@/utils/constant';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

interface IProps {
    value: number,
}

export default function CounterBox(props: IProps) {
    const { value } = props;

    const [quantity, setQuantity] = useState(value);
    const onIncrease = () => {
        setQuantity(quantity + 1);
    }

    const onDecrease = () => {
        if (quantity > 0)
            setQuantity(quantity - 1);
    }

    return (
        <View style={styles.counterBox} >
            <Pressable onPress={onIncrease} style={styles.counterBtn} >
                <AntDesign name="plussquare" size={24} color={APP_COLOR.DARK_BLUE} />
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>
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