import { createContext } from 'react';

const MyPreferences = createContext({
    preferences: {
    
    },
    setPreferences: () => { },
});

export const initPreferences = {
    vegetarian: false,
    vegan: false,
};

export default MyPreferences;