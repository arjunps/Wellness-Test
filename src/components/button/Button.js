import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button =({title='Label', onPress=()=>{}, customStyle= {}})=> {
  return  <TouchableOpacity style={[styles.container, {...customStyle}]} onPress = {onPress}> 
        <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
}

export default Button
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3f8ae4",
        height: "6%",
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    label: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
        color: "#ffffff"
    }
})