import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {

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
    <>
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
    </>
  )
}

export default SocialSignInButtons