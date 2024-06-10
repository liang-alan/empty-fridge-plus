import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AddIngredientsPage from './assets/pages/AddIngredientsPage';
import MyIngredientsPage from './assets/pages/MyIngredientsPage';
import RecipePageContainer from './assets/pages/RecipePageContainer';
import MyCart from './assets/scripts/MyCart';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// setup stack navigator
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <MyCart.Provider value={[cart, setCart]}>
      <GestureHandlerRootView>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'Add Ingredients') {
                  return <Text>🍎</Text>;
                } else if (route.name === 'My Ingredients') {
                  return <Text>🛍️</Text>;
                } else if (route.name === 'Find Recipes') {
                  return <Text>🍽️</Text>;
                }
              },
              headerShown: route.name !== 'Find Recipes',
            })}
          >
            <Tab.Screen name="Add Ingredients" component={AddIngredientsPage} />
            <Tab.Screen name="My Ingredients" component={MyIngredientsPage} />
            <Tab.Screen name="Find Recipes" component={RecipePageContainer} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      </GestureHandlerRootView>
    </MyCart.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the SafeAreaView covers the entire screen
  },
});

export default App;