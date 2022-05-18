import { View, Text , Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
// import Logo from '../../../assets/images/books-book-svgrepo-com.svg'
import Logo from '../../../assets/images/bblogo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller} from "react-hook-form";
import { Auth } from "aws-amplify";



const EMAIL_REGEX =/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

    const navigation = useNavigation();
  const {control, handleSubmit, 
    formState:{errors}, watch } = useForm({defaultValues:{
      username:'', password:'', password_repeat:''
    }});

  const pwd = watch('password');
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const {height} = useWindowDimensions();


  
  const onRegisterPress =async  (data) => {

    const {username,password,email,name} = data;
    try {
      const response =  await Auth.signUp( {
        username,
         password,
         attributes:{
          email, name,
          preferred_username: username
         }
      });
      console.log("response sign up" + response);
    } catch (e) {
      Alert.alert("INFO", e.message);
      console.log("erro"+ e.message)
    }

   navigation.navigate('ConfirmEmail', {username})
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
    rules={{required:'Username is required*',minLength: {value:8, message: 'Username should be minimun 8 characteres.' }}}
       />

    <CustomInput
    name="name"
    placeholder="Full name"
    control={control}
    rules={{required:'Full name is required*',minLength: {value:8, message: 'Username should be minimun 8 characteres.' }}}
       />


    <CustomInput
    name="email"
    placeholder="Email"
    control={control}
    rules={{required:true, pattern: {value: EMAIL_REGEX, message: 'please set a valid email ' }}}
    />
 

 <CustomInput
    placeholder="Password"
    name="password"
    control={control}
    secureTextEntry  
    rules={{required:'Password is required*',minLength: {value:8, message: 'Password should be minimun 8 characteres.' } }}
   
    />

<CustomInput
    placeholder="Repeat Password"
    name="password_repeat"
    control={control}
    secureTextEntry
    rules={{
      // validate:   pwd ==  value || 'Password do not match',
      required:'Password is required*',
      minLength: {value:8, message: 'Password should be minimun 8 characteres.' } }}
   
    />

    <CustomButton
    text='Register'
    onPress={handleSubmit(onRegisterPress)}
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