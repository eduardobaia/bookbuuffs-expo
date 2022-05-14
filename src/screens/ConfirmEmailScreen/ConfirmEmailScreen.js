import { View, Text , Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
// import Logo from '../../../assets/images/books-book-svgrepo-com.svg'
import Logo from '../../../assets/images/bblogo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onConfirmPress = () => {
    navigation.navigate('Home')
  }
  const onResendPress = () => {
       navigation.navigate('Home')
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
    placeholder="Code"
    value={code}
    setValue={setCode}
    />

 
    <CustomButton
    text='Confirm'
    onPress={onConfirmPress}
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