import React,{useState,useContext} from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from'../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) =>{
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const {register} = useContext(AuthContext);

    return(
        <View style={styles.container}>
     
          <Text style={styles.text}>Signup</Text>
          
          <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Enter your email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
       />

         <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Enter your password"
          iconType="lock"
          secureTextEntry={true}
         />

          <FormButton
          buttonTitle="Sign up"
          onPress={() => register(email, password)}
         />
          
          {/* <SocialButton
            buttonTitle="Continue with Facebook"
            color="#2e64e5"
            backgroundColor="#ffffff"
            onPress={() =>[]}
          /> */}
             <SocialButton
            buttonTitle="Continue with Google"
            color="#de4d41"
            backgroundColor="#ffffff"
            onPress={() =>[]}
          />
         <TouchableOpacity
         style={styles.forgotButton}
         onPress={() => navigation.navigate('Login')}>
         <Text style={styles.navButtonText}>
           Have an acount? Sign in 
         </Text>
        </TouchableOpacity>
     </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor:'#cfe8ff'
      },
  
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 50,
        color: '#051d5f',
         fontWeight:'bold'
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },

    });