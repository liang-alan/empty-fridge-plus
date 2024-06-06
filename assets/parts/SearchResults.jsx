import { FlatList, StyleSheet, Text, View } from 'react-native';
import SearchResultItem from './SearchResultItem';


const renderItem = ({ item }) => {
    return <SearchResultItem item={item} />;
}
const SearchResults = ({num, data }) => {
    return (
        <View>
            <Text style={styles.resultText}>{`Displaying ${num} results`}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        
    },
  
});

export default SearchResults;