import React,{useEffect,useState} from 'react'
import {View, Text, Button, Image, StyleSheet, ScrollView } from "react-native"
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Ima from "../user.jpg"
import Business from "../business.png"
export default function AllCompanies() {
    const LogoutUser = () =>{
        auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    } 

    const [users, setUsers] = useState([])
  
    useEffect(() => {
        
        database()
  .ref('/comUser/')
  .on('value', snapshot => {
  var userData = snapshot.val()
  var users = []
  Object.keys(userData).map((key)=>{
    users.push(userData[key])
  });
  setUsers(users)
    // console.log(uid)
  });   
        //  return () => {
         
        //  }=
       }, [])
    return (
        <ScrollView>
        <View>
            <Text style={{fontSize:25,backgroundColor:"lightpink",color:"white"}}>All Companies Details</Text>
                    <Button 
            title="signout"
            onPress={LogoutUser}
            />
     {
         users.map((user)=>(
            <View style={{borderWidth:1,borderColor:"white",marginTop:5,backgroundColor:"lightpink",display:"flex",flexDirection:"row"}}>
                <Image source={Business} style={{width:70,height:100}} />
            <View style={{width:350,marginLeft:5}}>
             <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Name : {user.firstName}</Text>
             <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Email : {user.email}</Text>
             <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Company Name : {user.companyName}</Text>
             </View>
            
             </View>
         )

         )
     }       
             
                
   
            
            
            </View>
       
            </ScrollView>  
    )
}
const styles = StyleSheet.create({
    list:{
        borderWidth:1,
        borderColor:"black",
        marginTop:10,
        display:"flex",
        flexDirection:'row',
        backgroundColor:"white"
    }
})