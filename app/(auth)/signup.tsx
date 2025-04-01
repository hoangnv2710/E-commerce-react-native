import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUpPage() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.greeting} > Hello{"\n"} Sign in!</Text> */}
            <View style={styles.linkContainer}>
                <View style={styles.underline}>
                    <Text style={styles.linkText}>Login</Text>
                </View>
                <View >
                    <Link style={styles.link} href={"/(auth)/signup"}>Sign up</Link>
                </View>
                {/* <Text style={styles.signupText}>Don't have account</Text> */}
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Email</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.loginText}>Password</Text>
                <TextInput style={styles.input}></TextInput>
            </View>


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
    loginContainer: {
        marginTop: 50,
    },
    loginText: {
        color: "blue",
        fontSize: 20,
        fontWeight: 600,
        marginTop: 10,
    },
    input: {
        borderColor: "black",
        borderBottomWidth: 2,
        width: "90%"
    },
    signupText: {
        fontWeight: 500,
        fontSize: 18,
        color: "#ccc"
    },
    link: {
        fontWeight: 700,
        fontSize: 20,
        color: "#ccc",
    },
    linkText: {
        fontWeight: 700,
        fontSize: 20,

    },
    linkContainer: {
        flexDirection: "row",
        gap: 10,
        // alignSelf: "flex-start",
        // borderColor: "#ccc",
        // borderBottomWidth: 2,
    },

    underline: {
        paddingBottom: 5,
        borderColor: "blue",
        borderBottomWidth: 4,
    }
})