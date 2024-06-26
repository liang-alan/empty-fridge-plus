import { View, StyleSheet, Keyboard} from 'react-native';
import { useState, useRef } from 'react';
import Search from '../parts/Search';
import SearchResults from '../parts/SearchResults';

const API_KEY = '0ca4a2ed351b48c4b86c89ea04848b8c';


export default function AddIngredientsPage() {

    const searchQuery = useRef('');
    const [ingredients, setIngredients] = useState([]);

    const handleSearch = () => {
        if (!searchQuery.current.value) {
            return;
        }
      
        fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${searchQuery.current.value}&number=50`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                // Capitalize the first letter of each ingredient
                setIngredients(data.results );

            });

        Keyboard.dismiss();
    };



    return <View>
        <Search
            textRef={searchQuery}
            handleSearch={handleSearch}
        />
        <SearchResults data={ingredients} num={ingredients.length} />
    </View>

  
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
});