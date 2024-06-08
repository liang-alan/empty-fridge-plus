import { View, Modal, StyleSheet, Dimensions, Text, Pressable, Image} from 'react-native';
import {useState, useContext} from 'react';
import FindRecipe from '../parts/FindRecipe';
import FindRecipeResults from '../parts/FindRecipeResults';
import MyCart from '../scripts/MyCart';

const { width } = Dimensions.get('window');


export default function FindRecipePage() {
    const [recipeData, setRecipeData] = useState([]);
    const [cart, setCart] = useContext(MyCart);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const searchRecipe = () => {
        console.log("Searching for recipes...");
        if (cart.length === 0) {
            console.log("Cart is empty");
            return;
        }
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${cart.map((i) => i.name).join(",+")}&number=10&apiKey=0ca4a2ed351b48c4b86c89ea04848b8c&ranking=1`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
            .then((data) => {
                setRecipeData(data);
                // console.log("New",recipeData);
            });

    }

    const onClose = () => {
        setModalVisible(false);
        setSelectedRecipe({});
    }

    const onOpen = (recipe) => {
        console.log("Opening recipe: ", recipe);
        setSelectedRecipe(recipe);
        setModalVisible(true);

    }
    return (
        <View>
            <FindRecipe searchRecipe={searchRecipe} />
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={onClose}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.card}>
                        <Image source={{ uri: `${selectedRecipe.image}` }} style={{ width: 150, height: 150 }} />
                        <Text style={styles.cardTitle}>
                            {selectedRecipe.title}
                        </Text>
                        <Text style={styles.cardText}>
                            Filler temporary text
                        </Text>
                        <Pressable style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </Pressable>
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
        fontSize: 24,
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
    },
    closeButtonText: {
        color: '#fff',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});