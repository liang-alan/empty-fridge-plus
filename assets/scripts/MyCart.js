import { createContext } from 'react';

const MyCart = createContext({
    cart: [],
    setCart: () => { },
});

export default MyCart;