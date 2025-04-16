import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"

interface IProps {
    title?: string,
    value: string,
    setValue: (v: any) => void,
}
export default function CustomInput(props: IProps) {
    const { title, value, setValue } = props;
    const [focus, setFocus] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <TextInput style={[styles.input, { borderColor: focus ? APP_COLOR.DARK_BLUE : "#ccc" }]}
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={(text) => { setValue(text) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        color: "black",
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        // borderColor: APP_COLOR.LIGHT_BLUE,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: "transparent",
    }
})