import { Pressable, StyleSheet, Text, View } from "react-native";

interface IProps {
    onPress: any,
    title: string,
}

export default function CustomBtn(props: IProps) {
    const { onPress, title } = props;

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container} >
                <Text>{title} </Text>
            </View>

        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {

    }
})