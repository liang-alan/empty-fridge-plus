import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SearchResultItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://img.spoonacular.com/ingredients_250x250/${item.image}` }}
                style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: '#ccc',
        borderRadius: 8,
        borderWidth: 1,
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: '5%',
        borderRadius: 100
    },
    text: {
        fontSize: '18em',
    },
});

export default SearchResultItem;
