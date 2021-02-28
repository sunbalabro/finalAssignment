import React, { useState } from 'react';
import {
  StyleSheet,
ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Back from "../back.jpg"

// import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const  LoginUser =()=>{
  
  
auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}  

  return (
    <View>

    <ImageBackground source={Back} style={styles.back}>
    <View style={styles.card}>
     <Text style={styles.heading}>Login</Text>
       <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,borderBottomColor:"lightpink"}}
        placeholder="Email address"
        onChangeText={text => setEmail  (text)}
        value={email}
      />
      <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"lightpink"}}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={text => setPassword  (text)}
        value={password}
      />
        <TouchableOpacity onPress={LoginUser} style={styles.button}>
        <Text style={{fontWeight:"bold",color:"white",marginTop:10}}>Log In</Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => navigation.navigate("Register")} >
        <Text style={{marginTop:10}}>Create Account</Text>
      </TouchableOpacity>

    
           </View>

    </ImageBackground>
     
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:20,
  color:"lightpink",
    fontWeight:"bold",
    marginTop:30
  },
  card: {
    width:300,
    borderWidth:2,
    borderColor:"lightpink",
    alignItems:"center",
    marginBottom:40,
    marginLeft:20,
    backgroundColor:"white",
    borderRadius:7,
    },
    button:{
      backgroundColor:"lightpink",
      width:250,
      borderWidth:1,
      borderColor:"lightpink",
      borderRadius:6,
      height:40,
      marginTop:10,
      alignItems:"center"
    },
  back:{
    resizeMode:"contain",
    justifyContent:'center',
    width:360,
    height:700
  }
});