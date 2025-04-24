import CustomBtn from "@/components/custom/Button.Custom";
import CustomInput from "@/components/custom/Input.Custom";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function LogInPage() {

    const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;
    // console.log("my url", URL_BACKEND);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.get(process.env.EXPO_PUBLIC_API_URL || "http://10.0.2.2:8084");
            // console.log(res.data)
        }
        fetchAPI();
    }, [])

    const onPressFunction = () => {
        router.replace("/(tabs)");
    };
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.greeting} >Welcome back!</Text>
            <View style={styles.container}>

                <View style={styles.navigateContainer}>
                    <View style={styles.navigateContainer}>
                        <View style={styles.underline}>
                            <Text style={styles.navigate} >Login</Text>
                        </View>
                        <Pressable
                            onPress={() => { router.replace("/(auth)/signup") }}
                            style={[styles.underline, { borderBottomWidth: 0 }]} >
                            <Text style={[styles.navigate, { color: "#ccc" }]} >Sign up</Text>
                        </Pressable>

                    </View>
                </View>
                <CustomInput title="Email" value={email} setValue={setEmail} />
                <CustomInput title="Password" value={password} setValue={setPassword} />
                <CustomBtn onPress={() => { router.replace("/(tabs)") }}
                    btnStyle={{
                        marginTop: 30,
                        paddingVertical: 10,
                        width: "100%",
                        backgroundColor: APP_COLOR.DARK_BLUE,
                        borderRadius: 10,
                    }}
                    textStyle={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 18
                    }}
                    title="LOGIN" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    greeting: {
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'left',
        paddingLeft: 15,
        color: "#fff",
        paddingVertical: 50,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    navigateContainer: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 20,
    },
    navigate: {
        fontWeight: 700,
        fontSize: 20,
    },
    underline: {
        paddingBottom: 5,
        borderColor: "blue",
        borderBottomWidth: 4
    }
})