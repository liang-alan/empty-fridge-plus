import React from 'react';
import { View, Image, Text, StyleSheet, Touchable, Pressable, Animated } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import MyCart from '../scripts/MyCart';


const API_KEY = '0ca4a2ed351b48c4b86c89ea04848b8c';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const SearchResultItem = ({ item, addCart }) => {
    const [cart, setCart] = useContext(MyCart);

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const getTitle = (title) => {
        const capitalizedTitle = capitalizeFirstLetter(title);
        return capitalizedTitle.length > 26
            ? `${capitalizedTitle.substring(0, 26)}...`
            : capitalizedTitle;
    };

    const onSwipeRight = () => {
        setCart((prevcart) => prevcart.filter((i) => i.id !== item.id));
    }

    const renderRightActions = (progress, drag) => {
        if (!cart.some((i) => i.id === item.id)) return null;
        return (
            <View style={styles.swipeDelete}>
                <Icon name="trash" size={width / 10} color="#fff" />
            </View>
        );
    }
    return (
        <Swipeable onSwipeableOpen={onSwipeRight}
            renderRightActions={renderRightActions}
            overshootRight={false}
            friction={1.5}
            rightThreshold={50}
            dragOffsetFromRightEdge={40}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: `https://img.spoonacular.com/ingredients_250x250/${item.image}` }}
                   style={styles.image}
               />
              <Text style={styles.text}>{
                getTitle(item.name)
              }
               </Text>
                <Pressable onPress={() => addCart(item)}>
                  {
                     cart && cart.map((i) => i.id).includes(item.id) ? (
                           <Icon name="checkmark-circle-outline" size={width/10} color="#449e48" style={styles.icon} />
                      ) : <Icon name="add-circle-outline" size={width / 10} color="#000" style={styles.icon} />
                    }
                </Pressable>
            </View> 
        </Swipeable>
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
        height: '80%',
        maxWidth: 100,
        maxHeight: 100,
        aspectRatio: 1,
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
        marginTop: width/-20
        // Add any other styles for the icon
    },
    swipeDelete: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 5,
        marginVertical: 5,
        borderRadius: 8,
    }
});

export default SearchResultItem;
