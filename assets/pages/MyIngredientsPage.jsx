import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchResultItem from '../parts/SearchResultItem';
import { useContext } from 'react';
import MyCart from '../scripts/MyCart';


export default function MyIngredientsPage() {
    const [cart, setCart] = useContext(MyCart);


    const renderItem = ({ item }) => {
        return <SearchResultItem item={item} addCart={addCart} />;
    }

    const addCart = (item) => {
        if (cart.includes(item)) {
            console.log("Already in cart: ", item);
            setCart(prevcart => prevcart.filter((i) => i !== item));
            return;
        }
        console.log("Added to cart: ", item);
        setCart(prevcart => [...prevcart, item]);

    }


    return (
        <View>
            {cart.length === 0 ? <Text style={styles.resultText}>Go add some ingredients to your cart!</Text> :
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListFooterComponent={
                        <View style={styles.footer}>

                        </View>
                    }
                />
            }
        </View>
        
    );
}

const styles = StyleSheet.create({
    resultText: {
        fontSize: 18,
        margin: 10,
        
    },
    footer: {
        marginBottom: '25%',
        marginTop: '1%',
        alignItems: 'center',
    }
  
});