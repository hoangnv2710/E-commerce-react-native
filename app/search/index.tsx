import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet, StatusBar } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function SearchScreen() {
    const { query } = useLocalSearchParams();

    const normalizedQuery = Array.isArray(query) ? query[0] : query;
    const inputRef = useRef<TextInput>(null);
    const [searchTerm, setSearchTerm] = useState<string>(normalizedQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    const handleSearch = (input: string) => {
        if (!input.trim()) return;
        router.replace(`/search/searchResult?query=${encodeURIComponent(input)}`)
    }

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <TextInput
                ref={inputRef}
                placeholder="Type to search..."
                style={styles.input}
                value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={(e) => handleSearch(e.nativeEvent.text)}
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
