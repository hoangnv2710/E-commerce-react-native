import CustomBtn from "@/components/custom/Button.Custom";
import CustomInput from "@/components/custom/Input.Custom";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { registerUser } from "@/api/user.api";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ToastAndroid } from 'react-native';


export default function SignUpPage() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    const handleSignUp = async () => {
        try {
            const response = await registerUser(email, password, name);
            // console.log(response);
            if (response._id) {
                ToastAndroid.show('Account registration successful!', ToastAndroid.SHORT);
                router.replace('/');
            } else {
                ToastAndroid.show(response.message, ToastAndroid.SHORT);
            }


        } catch (error) {
            console.error(error);
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.greeting} >Welcome!</Text>
            <View style={styles.container}>

                <View style={styles.navigateContainer}>
                    <View style={styles.navigateContainer}>
                        <Pressable
                            onPress={() => { router.replace("/") }}
                            style={[styles.underline, { borderBottomWidth: 0 }]} >
                            <Text style={[styles.navigate, { color: "#ccc" }]} >Login</Text>
                        </Pressable>
                        <View style={styles.underline}>
                            <Text style={styles.navigate} >Sign up</Text>
                        </View>
                    </View>
                </View>
                <CustomInput title="Name" value={name} setValue={setName} />
                <CustomInput title="Email" value={email} setValue={setEmail} />
                <CustomInput title="Password" value={password} setValue={setPassword} />
                <CustomBtn onPress={() => handleSignUp()}
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
                    title="SIGN UP" />
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