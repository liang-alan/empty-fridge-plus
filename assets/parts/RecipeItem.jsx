import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Modal , Pressable} from 'react-native';
import {useState, memo } from 'react';
import PercentageCircle from '../custom_icons/PercentageCircle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const InfoCard = ({ visible, onClose }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>
                        The left value represents the percentage of your ingredients used in the recipe.
                        The right value represents the percentage of ingredients needed for the recipe that you don't have.
                    </Text>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const RecipeItem = ({ item, openModal }) => {
    const [infoVisible, setInfoVisible] = useState(false);

    const handlePress = () => {
        setInfoVisible(true);
    }

    const handleClose = () => {
        setInfoVisible(false);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => openModal(item)} style={styles.row}>
            <Image
                source={{ uri: `${item.image}` }}
                style={styles.image}
            />
            <Text style={styles.text}>{
                item.title.length > 26
                    ? `${item.title.substring(0, 26)}...`
                    : item.title
                }
            </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress()} style={styles.percents}>
                <PercentageCircle percentage={100 * item.usedIngredientCount / (item.unusedIngredients.length + item.usedIngredientCount)} size={width / 6.5} strokeWidth={5} />
                <PercentageCircle percentage={100 * item.usedIngredientCount / (item.missedIngredients.length + item.usedIngredientCount)} size={width / 6.5} strokeWidth={5} />
            </TouchableOpacity>
            <InfoCard visible={infoVisible} onClose={handleClose} />
        </View>   
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: 16,
        marginRight: 10

    },
    percents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width / 1.8,
    },
    footer: {
        marginBottom: '25%',
        marginTop: '1%',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        height: height / 10,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    image: {
        height: '80%',
        maxWidth: 100,
        maxHeight: 100,
        aspectRatio: 1,
        borderRadius: 100,
        marginRight: 10,
    },
    circle: {
        marginHorizontal: 5,
    },
    card: {
        width: width/1.2,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
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
    }
 
   

});

export default memo(RecipeItem);