import { View, Modal, StyleSheet, Dimensions, Text, Pressable, Image } from 'react-native';
import 'react-native-gesture-handler';
import {useState, useContext, useEffect} from 'react';
import FindRecipe from '../parts/FindRecipe';
import FindRecipeResults from '../parts/FindRecipeResults';
import MyCart from '../scripts/MyCart';
import MyPreferences from '../scripts/MyPreferences';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const { width } = Dimensions.get('window');


export default function FindRecipePage() {


    const [recipeData, setRecipeData] = useState([]);
    const [cart, setCart] = useContext(MyCart);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const [searchPreferences, setSearchPreferences] = useContext(MyPreferences);
    const navigation = useNavigation();
    const searchRecipe = () => {
        console.log("Searching for recipes...");
        if (cart.length === 0) {
            console.log("Cart is empty");
            return;
        }
        
        // turn preferences into a query string
        let preferencesString = "";
        Object.keys(searchPreferences).forEach((prefType) => {
            if (prefType === "other") {
                Object.keys(searchPreferences[prefType]).forEach((pref) => {
                    if (searchPreferences[prefType][pref]) {
                        switch (pref) {
                            case "ignore pantry":
                                preferencesString += "&ignorePantry=true,";
                                break;
                            default:
                                break;
                        }
                        
                    }
                });
            } else {
                preferencesString += `&${prefType}=`;
                Object.keys(searchPreferences[prefType]).forEach((pref) => {
                    if (searchPreferences[prefType][pref]) {
                        preferencesString += `${pref},`;
                    }
                });
            }
        });

        console.log("Preferences string: ", preferencesString);


        fetch(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${cart.map((i) => i.name).join(",+")}&apiKey=0ca4a2ed351b48c4b86c89ea04848b8c&ranking=1&addRecipeInstructions=true&addRecipeInformation=true&number=10&fillIngredients=true&instructionsRequired=true&limitLicense=true&sort=max-used-ingredients&sortDirection=desc${preferencesString}&query= `,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) =>
            {
                if (!response.ok) {
                    console.log(response);
                    return;
                }
                    return response.json();
            }
            )
            .then((data) => {
                setRecipeData(data.results);
                // console.log("Results have been found: ", recipeData);
            });

    }

    const onClose = () => {
        setModalVisible(false);
        setSelectedRecipe({});
    }

    const onOpen = (recipe) => {
        // console.log("Opening modal for recipe: ", recipe);
        setSelectedRecipe(recipe);
        setModalVisible(true);
    }

    const onOpenFullPage = () => {
        onClose();
        navigation.navigate('Recipe Information', { data: selectedRecipe });
    }

    const openPreferences = () => {
        navigation.navigate('Filters', {});
        console.log("Opening preferences...");
        console.log("Preferences: ", searchPreferences);
    }

    
    return (
        <View>
            <FindRecipe searchRecipe={searchRecipe} />
            <View style={styles.rightAlign}>
                <Pressable onPress={openPreferences}>
                    <Text style={{color : 'blue'}}>Set Search Filters</Text>
                </Pressable>
            </View>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={onClose}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.card}>
                        <Image source={{ uri: `${selectedRecipe.image}` }} style={{ width: '100%', aspectRatio: 1.5  }} />
                        <Text style={styles.cardTitle}>
                            {selectedRecipe.title}
                        </Text>
                        <Text style={styles.cardText}>
                            Ready in {selectedRecipe.readyInMinutes} minutes.
                        </Text>
                        <Text style={styles.cardText}>
                            This recipe uses {selectedRecipe.usedIngredientCount} of your ingredients.
                        </Text>
                        <Text style={styles.cardText}>
                            You are missing {selectedRecipe.missedIngredientCount} ingredients.
                        </Text>
                        <View style={styles.row}>
                            <Pressable style={styles.learnMoreButton} onPress={onOpenFullPage}>
                                <Text style={styles.buttonText}>View Full Recipe</Text>
                            </Pressable>
                            <Pressable style={styles.closeButton} onPress={onClose}>
                                <Text style={styles.buttonText}>Close</Text>
                            </Pressable>
                        </View>
    
                    </View>
                </View>
            </Modal>
            <FindRecipeResults data={recipeData} num={recipeData.length} openModal={onOpen} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width / 1.2,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    learnMoreButton: {
        marginTop: 10,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
     
    },
    rightAlign: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // Ensure the rightAlign view takes up the full width of the container
        width: '100%',
        paddingRight: 15,
    }
});