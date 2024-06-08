import RecipeItem from './RecipeItem';
import { FlatList, StyleSheet, Text, View } from 'react-native';



const FindRecipeResults = ({ data , num, openModal}) => {
  
    const renderItem = ({ item }) => {
        // console.log("My Data", item);
        return <RecipeItem item={item} openModal={openModal}/>;
    };

    return (
        <View style={styles.results}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListFooterComponent={
                    <View style={styles.footer}>
                        <Text style={styles.resultText}>{
                            num == 0 ? "Add some ingredients to start searching for a recipe!" : "Search results are limited to 10 items. Please refine your search."
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
        marginBottom: '40%',
        marginTop: '1%',
        alignItems: 'center',
    },
   
});


export default FindRecipeResults;