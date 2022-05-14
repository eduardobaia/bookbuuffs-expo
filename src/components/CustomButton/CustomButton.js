import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";

const CustomButton = ({onPress, text, type='PRIMARY',bgColor, fgColor}) => {
  return (
    <Pressable
    onPress={onPress}
     style={[styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}]
     }>
      <Text style={[styles.text,
      styles[`text_${type}`],
      fgColor ? {color: fgColor} : {}
    
    ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {

    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,


  },
  container_PRIMARY:{
    // backgroundColor: "#3B71F3",
    backgroundColor: "#0081A7",
  },
  container_SECONDARY:{
    borderColor:"#0081A7",
    borderWidth: 2
  },
  container_TERTIARY:{
 
  },
  container_FOUR:{
    backgroundColor: "#F07167",
    borderColor: '#FED9B7',
    borderWidth: 1
  },
  text: {
      fontWeight: 'bold',
      color:'white'
  },
  text_SECONDARY:{
      color: "#0081A7",
  },
  text_TERTIARY:{
      color: 'gray',
  }
});

export default CustomButton;
