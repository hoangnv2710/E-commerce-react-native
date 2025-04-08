import CustomBtn from "@/components/custom/Button.Custom";
import CustomInput from "@/components/custom/Input.Custom";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUpPage() {
    const onPressFunction = () => {
        alert('press')
    };
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={styles.container}>
            <Text style={styles.greeting} > Welcome!</Text>
            <View style={styles.linkContainer}>
                <View style={styles.linkContainer}>
                    <View >
                        {/* <Link style={[styles.link, { color: "#ccc" }]} href={""}>Login</Link> */}
                    </View>
                    <View style={styles.underline}>
                        <Text style={styles.link} >Sign up</Text>
                    </View>
                </View>
            </View>
            <CustomInput title="Email" value={email} setValue={setEmail} />
            <CustomInput title="Password" value={password} setValue={setPassword} />
            <CustomBtn onPress={onPressFunction}
                btnStyle={{
                    marginTop: 30,
                    paddingVertical: 10,
                    width: "100%",
                    backgroundColor: APP_COLOR.DARK_BLUE,
                    borderWidth: 0,
                    borderRadius: 10,
                }}
                textStyle={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 18
                }}
                title="LOGIN" />
            <Link href={'/(tabs)'}>back home</Link>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: "#e6f5ff",
        height: "100%"
    },
    greeting: {
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'left',
    },
    linkContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 50,
    },
    link: {
        fontWeight: 700,
        fontSize: 20,

    },
    underline: {
        paddingBottom: 5,
        borderColor: "blue",
        borderBottomWidth: 4,
    }
})