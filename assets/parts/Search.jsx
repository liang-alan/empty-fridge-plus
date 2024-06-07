import React from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Search = ({ handleSearch, textRef }) => {
    return (
        <View style={styles.container}>
            <Icon name="search-outline" size={20} color="#000" style={styles.icon} />
            <TextInput
                style={styles.input}
                onChangeText={(e) => textRef.current.value = e}
                placeholder="Search for an ingredient..."
                ref={textRef}
            />
            <Button title="Find" onPress={handleSearch} />
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: height / 20,
        marginHorizontal: 10,
        marginTop: 10
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
    },
});

export default Search;
