import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Image, Pressable, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipeInfoPage = (data) => {
    const navigation = useNavigation();

    console.log("Recipe Info Page: ", data.route.params.data);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingText}>{data.route.params.data.title}</Text>
            <Image source={{ uri: `${data.route.params.data.image}` }} style={styles.image} />
            <TouchableOpacity onPress={() => Linking.openURL(data.route.params.data.sourceUrl)}>
                <Text style={styles.sourceText}>Source: {data.route.params.data.creditsText} </Text>
            </TouchableOpacity>
            <Text style={styles.headingText}>Ingredients:</Text>
            {data.route.params.data.extendedIngredients.map((ingredient) => {
                return (
                    <View key={ingredient.id} style={styles.row}>
                        <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                        <Text style={styles.ingredientText}>{ingredient.original}</Text>
                    </View>
                );
            })}
            <Text style={styles.headingText}>Instructions:</Text>
            {data.route.params.data.analyzedInstructions[0].steps.map((step) => {
                return (
                    <View key={step.number} style={styles.row}>
                        <Text style={styles.ingredientText}>{step.number +". "+  step.step}</Text>
                    </View>
                );
            })}
            <View style={styles.center}>
                <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'white' }}>Close</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image : {
        width: '100%',
        aspectRatio: 1.5,
        borderRadius: 16,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        alignItems: 'center',
        width: '80%',
    },
    center: {
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    sourceText: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    ingredientText: {
        fontSize: 18,
        marginBottom: 6,
    },
    bulletPoint: {
        fontSize: 18,
        marginHorizontal: 6,
        position: 'relative',
        top: -3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
    
});

export default RecipeInfoPage;