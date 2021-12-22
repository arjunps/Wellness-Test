import { View, Image, Alert } from 'react-native';
import TextField from '../../components/input/TextField';
import React, { useState } from 'react';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const validate = () => {
        if (username.length > 0 && password.length > 0) {
            navigation.navigate('MovieTurbo')
        } else {
            console.log("Here")
            createLoginAlert()
        }
    }

    const createLoginAlert = () =>
        Alert.alert(
            "",
            "Please enter username and password",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <Image source={require('../../../assets/Logo.png')} />
            <TextField
                onChangeText={val => setusername(val)}
                value={username}
                placeholder='User name'
            />

            <TextField
                onChangeText={val => setpassword(val)}
                value={password}
                placeholder='Password'
                isPassword={true}
                customStyle={{
                    marginTop: 20
                }}
            />

            <Button
                title='LOGIN'
                customStyle={{ marginTop: 50 }}
                onPress={validate} />
        </View>
    );
}

export default Login;