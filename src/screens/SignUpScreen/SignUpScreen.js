import { View, Text , Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
// import Logo from '../../../assets/images/books-book-svgrepo-com.svg'
import Logo from '../../../assets/images/bblogo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller} from "react-hook-form";



const SignUpScreen = () => {

  
  const navigation = useNavigation();
  const {control, handleSubmit, 
    formState:{errors} } = useForm();

  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const {height} = useWindowDimensions();

  const onSingInPress = () => {
    console.log("Sing in ");
  }
  const onRegisterPress = () => {
    navigation.navigate('ConfirmEmail')
  }
  const onTermsOfUsePressed = () => {
    console.log("reg in ");
  }
  const onPrivacyPolicyPressed = () => {
    console.log("reg in ");
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View  style={styles.root}>
      <Image
      source={Logo}
      resizeMode="contain"
      style={[styles.logo, {height: height * 0.1}]} />

     <Text style={styles.title}>Create an account</Text> 

    <Text style={ {fontSize: 40, fontWeight:'bold',color:'#00AFB9'}} >BookBuffs</Text>
 
  <CustomInput
    name="username"
    placeholder="Username"
    control={control}
    rules={{required:true, }}
    />


    <CustomInput
    name="email"
    placeholder="Email"
    control={control}
    rules={{required:true, }}
    />
 

 <CustomInput
    placeholder="Password"
    name="password"
    control={control}
    secureTextEntry
    rules={{required:true, }}
    />

<CustomInput
    placeholder="Password"
    name="repeatPassqord"
    control={control}
    secureTextEntry
    rules={{required:true, }}
    />

    <CustomButton
    text='Register'
    onPress={onRegisterPress}
    type='PRIMARY'
    />
 
  <Text>By resistering, you confirm that you accept our <Text style={styles.link} onPress={ onTermsOfUsePressed}>Terms of Use </Text> 
  and {''} <Text style={styles.link}  onPress={ onPrivacyPolicyPressed}> Privacy Policy </Text>   
  </Text>

<SocialSignInButtons />

<CustomButton
    text='Have an account? Sing in'
    onPress={onSignInPress}
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
    width: '40%',
    maxWidth: 300,
    maxHeight:200,
    marginBottom:20
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin:10
  },
  text:{
    color: 'gray',
    marginVertical: 1
  },
  link:{
    color:'#F07167'
  }
});


export default SignUpScreen