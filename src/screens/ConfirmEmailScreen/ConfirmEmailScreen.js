import { View, Text , Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
// import Logo from '../../../assets/images/books-book-svgrepo-com.svg'
import Logo from '../../../assets/images/bblogo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";
 

import { useNavigation, useRoute} from '@react-navigation/native';


const ConfirmEmailScreen = () => {

  const route= useRoute();

  const {control, handleSubmit, watch,
    formState:{errors} } = useForm({defaultValues:{username:route?.params?.username}});

  const username = watch('username');

  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onConfirmPress = async  () => {
    // console.log(data);
    // navigation.navigate('Home')


    try {
      const response = await Auth.confirmSignUp(username);
      console.log(response)
      navigation.navigate('SignIn')
      Alert.alert('Success', 'Code was resent to your email.');
    } catch (e) {
      Alert.alert('INFO', e.message);
      console.log(e.message)
    }


  }
  const onResendPress = async (data) => {
    try {
      const response = await Auth.resendSignUp(data.username);
      console.log(response)
      navigation.navigate('SignIn')
    } catch (e) {
      Alert.alert('INFO', e.message);
      console.log(e.message)
    }
 
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

    <Text style={ {fontSize: 40, fontWeight:'bold',color:'#00AFB9'}} >BookBuffs</Text>
  
     <Text style={styles.title}>Confirme your email </Text> 
     <Text>We've sent an email with the confirmation code, please check your email to  <Text style={styles.link} onPress={ onTermsOfUsePressed}>activate your account </Text> 
 clickin in the {''} <Text style={styles.link}  onPress={ onPrivacyPolicyPressed}> confirmation link </Text> or paste the code in here.   
  </Text>

  <CustomInput
    name="username"
    placeholder="Username"
    control={control}
    rules={{required:'Username is required.', minLength: {value:8, message: 'Code should habve min 8 characters ' }}}
    />

    <CustomInput
    name="code"
    placeholder="Code"
    control={control}
    rules={{required:'Code is required.', minLength: {value:8, message: 'Code should habve min 8 characters ' }}}
    />


 
    <CustomButton
    text='Confirm'
    onPress={handleSubmit( onConfirmPress)}
    type='FOUR'
    />
 
  {/* <Text>By resistering, you confirm that you accept our <Text style={styles.link} onPress={ onTermsOfUsePressed}>Terms of Use </Text> 
  and {''} <Text style={styles.link}  onPress={ onPrivacyPolicyPressed}> Privacy Policy </Text>   
  </Text> */}

{/* <SocialSignInButtons /> */}

<CustomButton
    text='Resend code'
    onPress={onResendPress}
    type= "SECONDARY"
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


export default ConfirmEmailScreen