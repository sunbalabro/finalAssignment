import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,

} from "react-native"
import Student from "../student.jpg"
import Business from "../business.png"
import Back from "../back.jpg"
export default function ChoosePages({navigation}) {
    return (
        <View style={{alignItems:"center"}}>
      
        <View>
        <ImageBackground source={Back} style={styles.back}>

<View style={styles.card}>
 
  <Text style={styles.heading}>Choose your profile</Text>
        <View>

      <TouchableOpacity style={{display:"flex",flexDirection:"row",width:250,
        borderWidth:1,
        borderColor:"lightpink",
        borderRadius:6,
        height:70,
        marginTop:10,
        alignItems:"center",}} onPress={() => navigation.navigate("Student Registration")} >
          <Image source={Student}  style={{width:30,height:40}} />
          <Text style={{fontWeight:"bold",color:"lightpink",marginTop:10}}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display:"flex",flexDirection:"row",width:250,
        borderWidth:1,
        borderColor:"lightpink",
        borderRadius:6,
        height:70,
        marginTop:10,marginBottom:20,
        alignItems:"center",}} onPress={() => navigation.navigate("Industrial Sign Up")}>
          <Image source={Business}  style={{width:30,height:40}} />
          <Text style={{fontWeight:"bold",color:"lightpink",marginTop:10}}>Industrial</Text>
      </TouchableOpacity>
        </View>
  

         </View>


         </ImageBackground>
</View>
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