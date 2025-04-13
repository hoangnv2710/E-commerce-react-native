import { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

interface IProps {
    onPress: any,
    title?: string,
    btnStyle?: StyleProp<ViewStyle>,
    pressStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    icon?: ReactNode
}

export default function CustomBtn(props: IProps) {
    const { onPress, title, btnStyle, pressStyle, textStyle, icon } = props;

    return (
        <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, }, pressStyle]}
            onPress={onPress}>

            <View style={[styles.container, btnStyle]} >
                {icon}
                <Text style={textStyle}>{title} </Text>

            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 2,
        margin: 2,
        alignSelf: "flex-start",

    }
})