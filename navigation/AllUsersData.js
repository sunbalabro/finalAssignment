import React,{useEffect,useState} from 'react'
import {
    View,
    Text,
    Button
} from "react-native"

import database from '@react-native-firebase/database';

export default function AllUsersData() {
    const [studentsData,setstudentsData] = useState([])
    const [companyData,setcompanyData] = useState([])
    const LogoutUser = () =>{
        auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    } 
    useEffect(() => {
        
        database()
  .ref('/stuUser/')
  .on('value', snapshot => {
  var userData = snapshot.val()
  var users = []
  Object.keys(userData).map((key)=>{
    users.push(userData[key])
  });
  setstudentsData(users)
  database()
  .ref('/comUser/')
  .on('value', snapshot => {
  var userData = snapshot.val()
  var cousers = []
  Object.keys(userData).map((key)=>{
    cousers.push(userData[key])
  });
  setcompanyData(cousers)
    // console.log(uid)
  });   
    // console.log(uid)
  });   
        //  return () => {
         
        //  }=
       }, [])
    return (
     <View style={{backgroundColor:"lightpink",height:700}}>
         <View style={{height:40,alignItems:"center",marginTop:10,backgroundColor:"lightpink"}} >
             <Text style={{fontSize:20,color:"white"}}>All User's Data</Text>
         </View>
             <Button 
            title="signout"
            onPress={LogoutUser}
            />
     {
         studentsData.map((user)=>(
            <View style={{borderWidth:1,borderColor:"pink",marginTop:20,backgroundColor:"white",display:"flex",flexDirection:"row"}}>
        <View style={{width:350,marginLeft:5}}>
             <Text style={{fontSize:18,fontWeight:"bold",color:"lightpink"}}>Name : {user.firstName}</Text>
           
             <Text style={{fontSize:18,fontWeight:"bold",color:"lightpink"}}>Email : {user.email}</Text>
           
            </View>
            
             </View>
         )

         )
     }
     {
         companyData.map((user)=>(
            <View style={{borderWidth:1,borderColor:"lightpink",marginTop:20,backgroundColor:"white",display:"flex",flexDirection:"row"}}>
        <View style={{width:350,marginLeft:5}}>
             <Text style={{fontSize:18,fontWeight:"bold",color:"lightpink"}}>Name : {user.firstName}</Text>
             <Text style={{fontSize:18,fontWeight:"bold",color:"lightpink"}}>Email : {user.email}</Text>
             <Text style={{fontSize:18,fontWeight:"bold",color:"lightpink"}}>Company Name : {user.companyName}</Text>
             </View>
            
             </View>
         )

         )
     }

     </View>
    )
}
