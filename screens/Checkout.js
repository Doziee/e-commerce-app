import React, { useState } from 'react';
import { View, TouchableOpacity,TextInput,Text } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";


export default function Checkout({navigation}) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >

    <TouchableOpacity 
       onPress={() => {
        navigation.navigate("Home")
      }}
     style={{ 
       backgroundColor: "transparent",
       flexDirection:"row",
       }}>

    <Ionicons name ="chevron-back" size={24} color="black"/>
    </TouchableOpacity>

    <Text style={{
      fontFamily:'calibribody',
      fontSize:30,
      fontWeight:700,
      color:"black"
    }}>Checkout</Text>
      </View>


      <Text style={{
        fontSize:18,marginTop:20,marginBottom:20,fontFamily:'Times New Roman',fontWeight:100
        }}>Shipping  Information</Text>
      <Ionicons name ="person-circle" size={24} color="black"/>
      <Ionicons name ="location" size={24} color="black"/>
      <FontAwesome name ="phone" size={24} color="black"/>
      <Ionicons name ="mail" size={24} color="black"/>
    

      <Text style={{
        fontSize:18,marginTop:80,marginBottom:20,fontFamily:'Times New Roman',fontWeight:100
        }}> Payment  Information</Text>
      <FontAwesome name ="credit-card-alt" size={24} color="black"/>

     <TouchableOpacity 
     onPress={()=> {
     navigation.navigate("Confirmation")
     }}
     style={{ 
       backgroundColor: "#E5CCFF", 
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 50,
       marginTop:190,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:16,color:"#4C0099", marginLeft:15}}>Confirm and checkout</Text>

    </TouchableOpacity>


    </View>

  );
}

