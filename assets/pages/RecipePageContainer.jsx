import RecipeInfoPage from "./RecipeInfoPage";
import FindRecipePage from "./FindRecipePage";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();



const RecipePageContainer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Search Recipes" component={FindRecipePage} />
            <Stack.Screen name="Recipe Information" component={RecipeInfoPage} />
        </Stack.Navigator>
    );
};
    
export default RecipePageContainer;