import React,{useEffect,useState} from 'react'
import {View, Text, Button, Image, StyleSheet, ScrollView } from "react-native"
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Ima from "../user.jpg"
import Student from "../student.jpg"

export default function AllStudents() {
    const LogoutUser = () =>{
        auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    } 
    const [users, setUsers] = useState([])
  
    useEffect(() => {
        
        database()
  .ref('/stuUser/')
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
        <View style={{backgroundColor:"lightpink",height:700}}>
                    <Button 
            title="signout"
            onPress={LogoutUser}
            />
     {
         users.map((user)=>(
            <View style={{borderWidth:1,backgroundColor:"white",marginTop:10,borderColor:"lightpink",display:"flex",flexDirection:"row"}}>
                <Image source={Student} style={{width:70,height:70}} />
            <View style={{width:350,marginLeft:5}}>
             <Text style={{fontSize:18,fontWeight:"bold", color:"lightpink"}}>Name : {user.firstName}</Text>
             <Text style={{fontSize:18,fontWeight:"bold", color:"lightpink"}}>Grade : {user.selectedValue}</Text>
             <Text style={{fontSize:18,fontWeight:"bold", color:"lightpink"}}>Group : {user.groupVal}</Text>
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