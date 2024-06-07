import { FlatList, StyleSheet, Text, View} from 'react-native';
import SearchResultItem from './SearchResultItem';
import MyCart from '../scripts/MyCart';
import { useContext } from 'react';


const SearchResults = ({ num, data }) => {
    const [cart, setCart] = useContext(MyCart);

    const addCart = (item) => {
        if (cart.includes(item)) {
            console.log("Already in cart: ", item);
            setCart(prevcart => prevcart.filter((i) => i !== item));
            return;
        }
        console.log("Added to cart: ", item);
        setCart(prevcart => [...prevcart, item]);

    }

    const renderItem = ({ item }) => {
        return <SearchResultItem item={item} addCart={addCart} />;
    }

    return (
        <View style={styles.results}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListFooterComponent={
                    <View style={styles.footer}>
                        <Text style={styles.resultText}>{
                            num > 50 ? "Search results are limited to 50 items. Please refine your search." : "You reached the end of the search results!"
                        }</Text>
                    </View>
                }
            />
        </View>
        
    );
};

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

export default SearchResults;