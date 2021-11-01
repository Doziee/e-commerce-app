import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import{MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}){
    return( 
        
     <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white"}}>
         <Image
         style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            marginBottom: 50,
            marginTop:70,
            transform:[{rotate:"295deg"}]
        }}
        source={require('./images/sun.png')} 
        />
        
           <Text style={{ colo:"rgba(0,0,0,0.6)", fontSize:"24"}}>Welcome to</Text> 
           <Text style={{ Color: "black", fontSize:"30", fontWeight: " 600", fontWeight: "bol"}}>
                Power Bike Shop
            </Text>
        <TouchableOpacity
           style={{ 
               backgroundColor : "#e3e3e3",
                padding:10,
                flexDirection:"row",
                 paddingHorizontal:60,
                 borderRadius: 10,
                marginTop:20 
                }}
        >
            <AntDesign name="google" size={24} color="orange" />
            <Text style={{ fontSize:17, marginLeft: 10}}>Login with Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
            navigation.navigate("Home")
        }}
        activeOpacity={0.8}
           style={{ 
               backgroundColor:"black",
               padding:10,
               flexDirection:"row",
               paddingHorizontal:60,
               borderRadius : 10,
               marginTop : 20,

           }}
        >
            <AntDesign name="apple1" size={24} color="white"  />
           <Text style={{ fontSize:17, color:"white", marginLeft: 10, paddingTop:3 }}>Login with Apple</Text>

        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{ fontSize:10, color:"grey",  paddingTop:10, fontWeight:"500" }}>Not a member? {" "}
             <Text style={{ color : "orange", fontWeight:"bold"}}>SinUp</Text>
        </Text> 
        </TouchableOpacity>
        
        
        </View>
     
    )
}