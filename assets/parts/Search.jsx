import { useContext} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Search = ({ value, onChangeText, onClear, handleSearch }) => {
    return (
        <View style={styles.container}>
            <Icon name="search-outline" size={20} color="#000" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
            />
            <Button title="Submit" onPress={handleSearch} />
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
        height: '6%',
        marginHorizontal: 10,
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