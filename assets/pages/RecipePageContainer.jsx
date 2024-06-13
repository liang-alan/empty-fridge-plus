import RecipeInfoPage from "./RecipeInfoPage";
import FindRecipePage from "./FindRecipePage";
import SetSearchPreferences from "../parts/SetSearchPreferences";
import MyPreferences from "../scripts/MyPreferences";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from 'react';
import { initPreferences } from "../scripts/MyPreferences";

const Stack = createStackNavigator();



const RecipePageContainer = () => {
    const [preferences, setPreferences] = useState(initPreferences);

    return (
        <MyPreferences.Provider value={[preferences, setPreferences]}>
            <Stack.Navigator>
                <Stack.Screen name="Search Recipes" component={FindRecipePage} />
                <Stack.Screen name="Recipe Information" component={RecipeInfoPage} />
                <Stack.Screen name="Filters" component={SetSearchPreferences} />
            </Stack.Navigator>
        </MyPreferences.Provider>
    );
};
    
export default RecipePageContainer;