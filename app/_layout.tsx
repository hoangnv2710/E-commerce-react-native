import { APP_COLOR } from "@/utils/constant";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

    const layoutTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: APP_COLOR.DARK_BLUE,
        },
    };

    return (


        <ThemeProvider value={layoutTheme}>
            <SafeAreaView style={{ flex: 1 }} >
                <StatusBar backgroundColor={APP_COLOR.DARK_BLUE} />
                <Stack  >
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(auth)"
                        options={{ headerShown: false }}
                    />
                </Stack>

            </SafeAreaView>
        </ThemeProvider>
    )
}