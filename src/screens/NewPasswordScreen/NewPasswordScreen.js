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



const NewPasswordScreen = () => {


  const {control, handleSubmit, 
    formState:{errors} } = useForm();


  const [code, setCode] = useState(""); 
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onSubmitPress =async  (data) => {
    
    try {
      const user = await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      console.log("User ee" + user);
    } catch (e) {
      //console.log("error signing in", error);
      Alert.alert("INFO", e.message);
    }

    navigation.navigate('SignIn')
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

    <Text style={ {fontSize: 40, fontWeight:'bold',color:'#00AFB9'}} >BookBuffs</Text>
  
     <Text style={styles.title}>Reset your password</Text> 
     <Text>Insert your code received by email </Text>
 
     <CustomInput
    name="username"
    placeholder="username"
    control={control}
    rules={{required:'Username is required*',minLength: {value:8, message: 'Password should be minimun 8 characteres.' } }}
    />
 

  <CustomInput
    name="code"
    placeholder="Code"
    control={control}
    rules={{required:'Code is required*',minLength: {value:8, message: 'Password should be minimun 8 characteres.' } }}
    />
 
   <CustomInput
    placeholder="Password"
    name="password"
    control={control}
    secureTextEntry  
    rules={{required:'Password is required*',minLength: {value:8, message: 'Password should be minimun 8 characteres.' } }}
   
    />


    <CustomButton
    text='Submit'
    onPress={handleSubmit(onSubmitPress)}
    type='FOUR'
    />
 

<CustomButton
    text='Back to  Sing in'
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


export default NewPasswordScreen