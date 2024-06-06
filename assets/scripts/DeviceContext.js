// components/DeviceContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [deviceInfo, setDeviceInfo] = useState({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        platform: Platform.OS,
    });

    useEffect(() => {
        const handleChange = ({ window }) => {
            setDeviceInfo({
                width: window.width,
                height: window.height,
                platform: Platform.OS,
            });
        };

        Dimensions.addEventListener('change', handleChange);

        return () => {
            Dimensions.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <DeviceContext.Provider value={deviceInfo}>
            {children}
        </DeviceContext.Provider>
    );
};

export default DeviceContext;