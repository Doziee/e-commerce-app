import React from "react";
import {View,Text,Image,TouchableOpacity,ImageBackground,} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Login({navigation}){
 return(
   <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#CC99FF"}}>
    
    <Text style={{ color:"purple", fontSize: 25, fontWeight: 700}}> Confirmation Success 🎉</Text>
    <Text style={{color:'#4C0099',fontWeight:500}}>Your package will be delievered in 2 days</Text>
    <TouchableOpacity 
       onPress={() => {
        navigation.navigate("Home")
      }}
     style={{ 
       backgroundColor: "#E5CCFF", 
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 50,
       marginTop:10,
       flexDirection:"row",
       }}>

    <FontAwesome name ="home" size={24} color="purple"/>
     <Text style={{fontSize:16,color:"#4C0099", marginLeft:15}}>Back to Home</Text>

    </TouchableOpacity>

    

   </View>
  
 );
}
