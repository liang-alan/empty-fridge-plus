import React from 'react';
import { View, Image, Text, StyleSheet, Touchable, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import MyCart from '../scripts/MyCart';


const API_KEY = '0ca4a2ed351b48c4b86c89ea04848b8c';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SearchResultItem = ({ item, addCart }) => {
    const [cart, setCart] = useContext(MyCart);
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://img.spoonacular.com/ingredients_250x250/${item.image}` }}
                style={styles.image}
            />
            <Text style={styles.text}>{
                item.name.length > 24
                    ? `${item.name.substring(0, 24)}...`
                    : item.name
            }
            </Text>
            <Pressable onPress={() => addCart(item)}>
                {
                    cart && cart.map((i) => i.id).includes(item.id) ? (
                        <Icon name="checkmark-circle-outline" size={width / 12} color="#449e48" style={styles.icon} />
                    ) : <Icon name="add-circle-outline" size={width / 12} color="#000" style={styles.icon} />
                }
            </Pressable>
        </View>   
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        height: height / 10,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    image: {
        width: width / 6,
        height: width / 6,
        borderRadius: 100,
        marginRight: 10,
    },
    text: {
        flex: 1,
        fontSize: 16,
        marginRight: 10,
    },
    icon: {
        position: 'absolute',
        right: width / 75,
        marginTop: width/-24
        // Add any other styles for the icon
    },
});

export default SearchResultItem;
