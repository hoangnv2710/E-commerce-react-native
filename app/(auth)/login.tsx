import CustomBtn from "@/components/custom/Button.Custom";
import CustomInput from "@/components/custom/Input.Custom";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LogInPage() {
    const onPressFunction = () => {
        alert('press')
    };
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={styles.container}>
            {/* <Text style={styles.greeting} > Hello{"\n"} Sign in!</Text> */}
            <View style={styles.linkContainer}>
                <View style={styles.underline}>
                    <Text style={styles.link}>Login</Text>
                </View>
                <View >
                    <Link style={[styles.link, { color: "#ccc" }]} href={"/(auth)/signup"}>Sign up</Link>
                </View>
                {/* <Text style={styles.signupText}>Don't have account</Text> */}
            </View>
            <CustomInput title="Email" value={email} setValue={setEmail} />
            <CustomInput title="Password" value={password} setValue={setPassword} />
            <CustomBtn onPress={onPressFunction}
                btnStyle={{
                    marginTop: 10,
                    padding: 5,
                }}
                textStyle={{
                    color: "blue",
                }}
                icon={<AntDesign name="login" size={24} color="black" />}
                title="hello" />
            <Link href={'/(tabs)'}>clickme</Link>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 30,
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