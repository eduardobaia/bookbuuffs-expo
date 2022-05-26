import { View, Text, Button } from 'react-native'
import React, {useContext, useState}  from 'react'
import { AuthContext } from '../../context/AuthContext';


const HomeScreen = () => {
    
  const {logout, userInfo, isLoading} = useContext(AuthContext);

  const onLogOutPress = () => {
      console.log("entrou no log out press")
    logout()
  }


  return (
    <View>
      <Text>HomeScreen  OK 
          
          Bom dia {userInfo.username} </Text>

      <Button title='Logout' color="red"  onPress={onLogOutPress} />
    </View>
  )
}

export default HomeScreen