import { ScrollView, View,  Text, StyleSheet } from 'react-native';
import FilterCard from './FilterCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const SetSearchPreferences = (props) => {


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Dietary Restrictions</Text>
                <View style={styles.row}>
                    <FilterCard name="Vegetarian" type="diet" />
                    <FilterCard name="Vegan" type="diet" />
                    <FilterCard name="Gluten Free" type="diet" />
                </View>
                <View style={styles.row}>
                    <FilterCard name="Ketogenic" type="diet" />
                    <FilterCard name="Paleo" type="diet" />
                    <FilterCard name="Pescetarian" type="diet" />
                </View>
                
            <Text style={styles.title}>Allergies</Text>
            <View style={styles.row}>
                <FilterCard name="Dairy" type="intolerances" />
                <FilterCard name="Egg" type="intolerances" />
                <FilterCard name="Gluten" type="intolerances" />
            </View>
            <View style={styles.row}>
                <FilterCard name="Grain" type="intolerances" />
                <FilterCard name="Peanut" type="intolerances" />
                <FilterCard name="Seafood" type="intolerances" />
            </View>
            <View style={styles.row}>
                <FilterCard name="Sesame" type="intolerances" />
                <FilterCard name="Shellfish" type="intolerances" />
                <FilterCard name="Soy" type="intolerances" />
            </View>
            <View style={styles.row}>
                <FilterCard name="Sulfite" type="intolerances" />
                <FilterCard name="Tree Nut" type="intolerances" />
                <FilterCard name="Wheat" type="intolerances" />
            </View>
            <Text style={styles.title}>Exclude Cuisines</Text>
            <View style={styles.row}>
                <FilterCard name="African" type="cuisine"/>
                <FilterCard name="Asian" type="cuisine"/>
                <FilterCard name="American" type="cuisine" />
            </View>
            <View style={styles.row}>
                <FilterCard name="British" type="cuisine"/>
                <FilterCard name="Cajun" type="cuisine"/>
                <FilterCard name="Caribbean" type="cuisine" />
            </View>
            <View style={styles.row}>
                <FilterCard name="Chinese" type="cuisine"/>
                <FilterCard name="Eastern European" type="cuisine"/>
            </View>
            <View style={styles.row}>
                <FilterCard name="European" type="cuisine" />
                <FilterCard name="French" type="cuisine"/>
                <FilterCard name="German" type="cuisine"/>
            </View>
            <View style={styles.row}>
                <FilterCard name="Greek" type="cuisine" />
                <FilterCard name="Indian" type="cuisine"/>
                <FilterCard name="Irish" type="cuisine"/>
            </View>
            <View style={styles.row}>
                <FilterCard name="Italian" type="cuisine" />
                <FilterCard name="Japanese" type="cuisine"/>
                <FilterCard name="Jewish" type="cuisine"/>
            </View>
            <View style={styles.row}>
                <FilterCard name="Korean" type="cuisine" />
                <FilterCard name="Latin American" type="cuisine" />
                
            </View>
            <View style={styles.row}>
                <FilterCard name="Mediterranean" type="cuisine" />

                <FilterCard name="Mexican" type="cuisine" />
            </View>
            <View style={styles.row}>
                <FilterCard name="Middle Eastern" type="cuisine" />
                <FilterCard name="Nordic" type="cuisine" />
                <FilterCard name="Southern" type="cuisine" />
            </View>
            <View style={styles.row}>
                <FilterCard name="Spanish" type="cuisine" />
                <FilterCard name="Thai" type="cuisine" />
                <FilterCard name="Vietnamese" type="cuisine" />
            </View>


            <Text style={styles.title}>Other Filters</Text>
            <View style={styles.row}>
                <FilterCard name="Ignore Pantry" type="other"/>
          
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
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