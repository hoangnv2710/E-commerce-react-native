import { Link, Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {

    return (
        <View style={styles.container}>
            <Redirect href={'/(auth)/login'} />
            <Link href={'/(auth)/login'}>clickme</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});