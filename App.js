import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import Navigation from './src/screens/navigation';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';


export default function App() {
  return (
    <AuthProvider>
    <SafeAreaView style={styles.root}>
    {/* <SignInScreen /> */}
    {/* <SignUpScreen /> */}
    {/* <ConfirmEmailScreen /> */}
    {/* <ForgotPasswordScreen /> */}
    {/* <NewPasswordScreen /> */}
    <Navigation />
    </SafeAreaView>
    </AuthProvider>
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
