import { useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet, StatusBar } from 'react-native';

export default function SearchScreen() {
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        // Delay một chút để đảm bảo input đã render
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <TextInput
                ref={inputRef}
                placeholder="Type to search..."
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
    input: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
});
