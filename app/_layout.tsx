import { APP_COLOR } from "@/utils/constant";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";

export default function RootLayout() {

    const layoutTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: APP_COLOR.DARK_BLUE,
        },
    };

    return (
        <AuthProvider>
            <CartProvider>
                <OrderProvider>
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
                                    name="(auth)/signup"
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="category/index"
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="product/[id]"
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                                <Stack.Screen
                                    name="order/checkout"
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="order/ordersStatusList"
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="order/detail"
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="search/index"
                                    options={{
                                        headerShown: false,

                                    }}
                                />

                                <Stack.Screen
                                    name="search/searchResult"
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                            </Stack>
                        </SafeAreaView>
                    </ThemeProvider>
                </OrderProvider>
            </CartProvider>
        </AuthProvider>
    )
}