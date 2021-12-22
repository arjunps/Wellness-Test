import { useNavigation } from '@react-navigation/native';
import React,{useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import Button from '../../components/button/Button';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <Image source={require('../../../assets/Logo.png')} />
            <Text
                style={{ fontWeight: "500", fontSize: 24, color: "black" , marginVertical: "30%"}}>WELCOME</Text>
            <Button title='GET STARTED' 
                    customStyle={{ marginTop: 50 }} 
                    onPress={()=> {navigation.navigate('Login')}} />
        </View>
    );
}

export default Welcome;