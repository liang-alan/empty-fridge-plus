import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {useEffect} from 'react';


const Checkbox = ({checked}) => {
   
    return (
        <Pressable>
            <View style={styles.container}>
                <Icon name={!checked ? 'square-outline' : 'checkbox-outline'} size={16}  style={styles.icon} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        color: 'black',
    }
});

export default Checkbox;