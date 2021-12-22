import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField =({placeholder= '', onChangeText, value,isPassword=false,customStyle={} })=> {
  return  <>
    <TextInput 
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    style = {[styles.inputStyles,{...customStyle}]}
    secureTextEntry={isPassword}
    placeholderTextColor={'gray'}
    />
    </>
}

export default TextField

const styles = StyleSheet.create({
  inputStyles:{
    height:'8%',
    width:'90%',
    borderRadius:30,
    borderWidth:0.5,
    borderColor:'gray',
    paddingHorizontal:10,
    fontSize:18
}
})