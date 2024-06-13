import { createContext } from 'react';

const MyPreferences = createContext({
    preferences: {
    
    },
    setPreferences: () => { },
});

export const initPreferences = {
    "diet": {},
    "intolerances": {},
    "cuisine": {},
    "other": {},
    
};

export default MyPreferences;