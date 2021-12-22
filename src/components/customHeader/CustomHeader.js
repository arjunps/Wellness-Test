import React from 'react';
import { View, Text } from 'react-native'

const CustomHeader = ({ title = '' }) => {
    return (
        <View style={{
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f2f2f2'
        }}>
            <Text style={{
                fontSize: 18,
                color: '#3f8ae4'
            }}>{title}</Text>
        </View>
    );
}

export default CustomHeader;