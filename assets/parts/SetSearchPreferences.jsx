import { ScrollView, View,  Text, StyleSheet } from 'react-native';
import FilterCard from './FilterCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const SetSearchPreferences = (props) => {


    return (
        <ScrollView>
            <Text style={styles.title}>Dietary Restrictions</Text>
            <View style={styles.row}>
                <FilterCard name="Vegetarian" />
                <FilterCard name="Vegan" />
            </View>
            
            <Text style={styles.title}>Cuisine</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    
});

export default SetSearchPreferences;