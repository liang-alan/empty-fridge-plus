import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from '../custom_icons/Checkbox';
import { useState, useEffect, useContext } from 'react';

import MyPreferences from '../scripts/MyPreferences';

const FilterCard = ({ name }) => {
    const [preferences, setPreferences] = useContext(MyPreferences);

    const [checked, setChecked] = useState(preferences[name.toLowerCase()]);

    const onPress = () => {
        setChecked(!checked);

        setPreferences((prev) => {
            return {
                ...prev,
                [name.toLowerCase()]: !prev[name.toLowerCase()],
            };
        });
        
    }

    
  
    return (
        <TouchableOpacity style={styles.row} onPress={onPress}>
            <Checkbox checked={checked} />
            <Text style={styles.cardText}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardText: {
        fontSize: 18,
        marginLeft: 4,
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
});

export default FilterCard;