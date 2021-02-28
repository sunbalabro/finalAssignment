import React, { useState } from 'react';
import {
StyleSheet,
ImageBackground,
View,
Text,
TextInput,
TouchableOpacity,
ScrollView,
Picker
} from 'react-native';
// import Ima2 from "../backreg.jpg"
import Back from "../back.jpg"
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function StudentSignup() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [phoneNumber, setphoneNumber] = useState('');
const [companyName, setcompanyName] = useState('');

const RegisterUser=({ userId })=>{

auth()
.createUserWithEmailAndPassword(email, password)
.then((result) => {
    console.log('User account created & signed in!' , result);
    const comUser = result

database().ref("/comUser/").push({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName,
    phoneNumber:phoneNumber,
    companyName:companyName,
});
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
<ScrollView>
<View>
<ImageBackground source={Back} style={styles.Bg} >
    
    <View style={styles.card}>
    <Text style={styles.heading}>Register</Text>
    <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,borderBottomColor:"red"}}
        placeholder="Email address"
        onChangeText={text => setEmail  (text)}
        value={email}
    />
    <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={text => setPassword  (text)}
        value={password}
    />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="First name"
        onChangeText={text => setfirstName  (text)}
        value={firstName}
    />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="Last name"
        onChangeText={text => setlastName  (text)}
        value={lastName}
    />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="Phone number"
        onChangeText={text => setphoneNumber  (text)}
        value={phoneNumber}
    />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="Company Name"
        onChangeText={text => setcompanyName  (text)}
        value={companyName}
    />
       
  
        <TouchableOpacity onPress={RegisterUser} style={styles.button}>
        <Text style={{fontWeight:"bold",color:"white",marginTop:10}}>Register</Text>
    </TouchableOpacity>
    
    
    </View>
    </ImageBackground>
    </View>

</ScrollView>
    )
}

const styles = StyleSheet.create({
heading:{
fontSize:20,
color:"red",
fontWeight:"bold",
marginTop:30
},
card: {
width:300,
borderWidth:2,
borderColor:"white",
alignItems:"center",
marginTop:100,
marginLeft:20,
backgroundColor:"white",
borderRadius:7,
},
button:{
  backgroundColor:"red",
  width:250,
  borderWidth:1,
  borderColor:"red",
  borderRadius:6,
  height:40,
  marginTop:10,
  alignItems:"center"
},
Bg:{
    resizeMode:"contain",
    width:360,
    height:650
}
});
