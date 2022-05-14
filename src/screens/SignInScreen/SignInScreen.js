import { View, Text , Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'
// import Logo from '../../../assets/images/books-book-svgrepo-com.svg'
// import Logo from '../../../assets/images/Bookbuffs.png'
import Logo from '../../../assets/images/bblogo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller} from "react-hook-form";


const SignInScreen = () => {
 
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const {control, handleSubmit, 
    formState:{errors} } = useForm();

    console.log(errors)
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onSingInPress = (data) => {
   //validate user
    console.log(data);
 //   navigation.navigate('Home')
  }

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword')
  }
  const onSingUpPress = () => {
    navigation.navigate('SignUp')
  }
  
  const onFaceBookPress = () => {
    console.log("onForgotPasswordPress in ");
  }
  const onGooglePress = () => {
    console.log("onForgotPasswordPress in ");
  }
  const onApplePress = () => {
    console.log("onForgotPasswordPress in ");
  }



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View  style={styles.root}>
      <Image
      source={Logo}
      resizeMode="contain"
      style={[styles.logo, {height: height * 0.2}]} />

  <Text style={ {fontSize: 40, fontWeight:'bold',color:'#00AFB9'}} >BookBuffs</Text>
 


  {/* <TextInput placeholder='Password' /> */}
 
 
     <CustomInput
    name="username"
    placeholder="Username"
    control={control}
    rules={{required:'Username is required*',minLength: {value:8, message: 'Username shoud be minimun 8 characteres.' }}}
    />

    <CustomInput
    placeholder="Password"
    name="password"
    control={control}
    secureTextEntry
    rules={{required:'Password is required*',minLength: {value:8, message: 'Password shoud be minimun 8 characteres.' } }}
    />

    <CustomButton
    text='Login'
    onPress={handleSubmit(onSingInPress)}
    type='PRIMARY'
    />
    <CustomButton
    text='Forgot password? '
    onPress={onForgotPasswordPress}
    type= "TERTIARY"
    />
    <CustomButton
    text='Sign In with Facebook'
    onPress={onFaceBookPress}
    bgColor='#E7EAF4'
    fgColor='#4765A9'
    />
    <CustomButton
    text='Sign In with Google '
    onPress={onGooglePress}
    bgColor='#FAE9EA'
    fgColor='#DD4D44'
    />
    <CustomButton
    text='Sign In with Apple '
    onPress={onApplePress}
    bgColor='#e3e3e3'
    fgColor='#363636'
    />

<CustomButton
    text='Dont you have an account? Create one'
    onPress={onSingUpPress}
    type= "TERTIARY"
    />

    </View>
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
  root:{ 
    alignItems:'center',
    padding: 20,
    marginTop:100,
    marginBottom:200
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight:200,
    marginBottom:20
  },
});


export default SignInScreen