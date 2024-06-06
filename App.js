// App.js
import {useState} from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, Dimensions, Platform} from 'react-native';
import Search from './assets/parts/Search';
import SearchResults from './assets/parts/SearchResults';
import { DeviceProvider } from './assets/scripts/DeviceContext';

const API_KEY = '0ca4a2ed351b48c4b86c89ea04848b8c';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSearch = (query) => {
    // make get request to https://api.spoonacular.com/food/ingredients/search
    fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${searchQuery}&number=50`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setIngredients(data.results);
    
      });
  };

  const clearSearch = () => {

  };

  const onChangeText = (text) => {
    setSearchQuery(text);
  }

 
  return (
    <DeviceProvider>
      <SafeAreaView style={styles.container}>
        <Search
          value={searchQuery}
          onClear={clearSearch}
          onChangeText={onChangeText}
          handleSearch={handleSearch}
        />
        <SearchResults data={ingredients} num={ingredients.length} />
      </SafeAreaView>
    </DeviceProvider>
  );
};


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

export default App;