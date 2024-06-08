import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const PercentageCircle = ({ percentage, size, strokeWidth }) => {

    // Utility function to interpolate between two colors
    const interpolateColor = (color1, color2, factor) => {
        const result = color1.slice(1).match(/.{2}/g).map((color, index) => {
            const value1 = parseInt(color, 16);
            const value2 = parseInt(color2.slice(1).match(/.{2}/g)[index], 16);
            const value = Math.round(value1 + factor * (value2 - value1));
            return value.toString(16).padStart(2, '0');
        });
        return `#${result.join('')}`;
    };

    // Function to get stroke color based on percentage
    const getStrokeColor = (percentage) => {
        if (percentage <= 50) {
            return interpolateColor('#FF0000', '#FFA500', percentage / 50); // Red to Orange
        } else {
            return interpolateColor('#FFA500', '#00FF00', (percentage - 50) / 50); // Orange to Green
        }
    };

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * (circumference);
    const strokeColor = getStrokeColor(percentage);

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <Circle
                    stroke="#e6e6e6"
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    {...{ strokeWidth }}
                />
                <Circle
                    stroke={strokeColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    {...{ strokeWidth }}
                />
            </Svg>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{`${Math.floor(percentage)}%`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default PercentageCircle;