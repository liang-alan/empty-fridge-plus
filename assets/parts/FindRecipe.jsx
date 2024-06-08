import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FindRecipe = ({ searchRecipe }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.primaryButton} onPress={searchRecipe}>
                <Text style={styles.buttonText}>Find Recipe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    primaryButton: {
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FindRecipe;