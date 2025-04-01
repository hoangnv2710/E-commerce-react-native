import { APP_COLOR } from "@/utils/constant";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaView, useColorScheme } from "react-native";


export default function RootLayout() {

    const layoutTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: APP_COLOR.DARK_BLUE,
        },
    };

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ThemeProvider value={layoutTheme}>
                <Stack  >
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </ThemeProvider>
        </ SafeAreaView>
    )
}