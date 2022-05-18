import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import Navigation from './src/screens/navigation';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import config from './src/aws-exports';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import Amplify, {Auth} from 'aws-amplify';

Amplify.configure(config);

const  App= () => {
  //Auth.signOut();
  return (

    <SafeAreaView style={styles.root}>
    {/* <SignInScreen /> */}
    {/* <SignUpScreen /> */}
    {/* <ConfirmEmailScreen /> */}
    {/* <ForgotPasswordScreen /> */}
    {/* <NewPasswordScreen /> */}
    <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  // alignItems: 'center',
     justifyContent: 'center',
  },
});

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};

const customTheme = {...AmplifyTheme,
                button:{
                  ...AmplifyTheme.button,
                  backgroundColor:'blue',
                  borderRadius:10
                }}

export default  App;