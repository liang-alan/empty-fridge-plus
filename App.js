import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AddIngredientsPage from './assets/pages/AddIngredientsPage';
import MyIngredientsPage from './assets/pages/MyIngredientsPage';
import FindRecipePage from './assets/pages/FindRecipePage';
import MyCart from './assets/scripts/MyCart';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <MyCart.Provider value={[cart, setCart]}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Tab.Navigator>
            <Tab.Screen name="Add Ingredients" component={AddIngredientsPage} />
            <Tab.Screen name="My Ingredients" component={MyIngredientsPage} />
            <Tab.Screen name="Find Recipes" component={FindRecipePage} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </MyCart.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the SafeAreaView covers the entire screen
  },
});

export default App;