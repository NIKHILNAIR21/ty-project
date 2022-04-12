import React,{useContext, useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,Platform } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from'../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from "../navigation/AuthProvider";

const LoginScreen = ({navigation}) =>{
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const{login,googleLogin}= useContext(AuthContext);
    return(
        <View style={styles.container}>
        <Image
          source={require('../assets/rn-social-logo.png')}
          style={styles.logo}
          />
          <Text style={styles.text}>SocialClub</Text>
          
          <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
       />

         <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
         />

          <FormButton
          buttonTitle="Sign In"
          onPress={() => login(email,password)}
         />
          
          {Platform.OS === 'android' ? (
            <View>
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
            onPress={() => googleLogin()}
          />
          </View>
          ) : null}
         <TouchableOpacity
         style={styles.forgotButton}
         onPress={() => navigation.navigate('Signup')}>
         <Text style={styles.navButtonText}>
           Don't have an acount? Create here
         </Text>
        </TouchableOpacity>
     </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor:'#cfe8ff'
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
        fontWeight:'bold',
       
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