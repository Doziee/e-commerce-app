import React , { useState }from 'react';
import {View, Text ,TouchableOpacity, Image, ScrollView} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Home({navigation}){ 
    return(  
    <View 
    style={{
        backgroundColor: "white",
        flex:1, 
        
       //paddingHorizontal: 20,
        
    }}
    >
        <ScrollView>
        
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop:55,
            
        }}>
          
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="book" size={24} color="brown" />
        <View style= {{flexDirection:"row"}}>
        <Ionicons name="search" size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        </View>

        <Text style={{ fontSize:15, color:"blue",  paddingTop:15, fontWeight:"500", paddingLeft:15}}>The World's {" "}
             <Text style={{ color : "red", fontWeight:"bold"}}>Best Book Collection</Text>
        </Text>

        <Text style={{paddingTop:15, fontWeight:"bold", paddingLeft:25, color: "brown"}}>Genres</Text>
        
        <View style= {{flexDirection:"row"}}>
            

        <TouchableOpacity
        
           style={{ 
            backgroundColor : "#eee",
            marginRight:10,
             padding:10,
             borderRadius: 10,
             marginTop:20,
             marginLeft:20,
             }}
        >
            <Text style={{ color: "orange" , alignItems:"center",fontWeight:"bold" }}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ 
                backgroundColor : "#eee",
                marginRight:10,
                 padding:10,
                 borderRadius: 10,
                 marginTop:20 
                 }}
        >
            <Text style={{alignItems:"center", color: "red"}}>Romance</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{ 
               backgroundColor : "#eee",
               marginRight:10,
                padding:10,
                borderRadius: 10,
                marginTop:20 
                }}
        >
     <Text style={{ alignItems:"center", color: "red" }}>Science</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={{ 
               backgroundColor : "#eee",
               marginRight:10,
                padding:10,
                borderRadius: 10,
                marginTop:20 
                }}
        >
     <Text style={{ alignItems:"center", color: "red" }}>Life</Text>
        </TouchableOpacity>

        </View>
         
         
         <View style= {{flexDirection:"row"}}>

        <TouchableOpacity style={{
          marginTop:30,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:25,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="brown" />
        <Image
         style={{
            marginTop:1,
            width: 140,
            height: 120,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/The girl in red.jpg')} 
        />
        <Text style={{ 

            color: 'lightblue',
        }}>
        The Girl In Red</Text>
        <Text style={{ 
            color:"red",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 500.00</Text></Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
          marginTop:30,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:2,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            marginTop:1,
            width: 140,
            height: 120,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/Sing to it.jpg')} 
        />
        <Text style={{ 
            
            color: 'lightblue',
        }}>
        Sing To It</Text>
        <Text style={{ 
            color:"red",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 450.00</Text></Text>

        </TouchableOpacity>
        </View>
        <View style= {{flexDirection:"row"}}>
        <TouchableOpacity style={{
          marginTop:5,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:25,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            marginTop:-8,
            width: 140,
            height: 160,
            borderRadius: 20,
            
            
           
        }}
        source={require('./images/no place like here.jpg')} 
        />
        <Text style={{ 

            color: 'lightblue',
        }}>
         No Place Like Here</Text>
        <Text style={{ 
            color:"red",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 350.00</Text></Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
          marginTop:5,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:2,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            marginTop:1,
            width: 140,
            height: 120,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/Memory.jpg')} 
        />
        <Text style={{ 
            
            color: 'lightblue',
        }}>
        Memory</Text>
        <Text style={{ 
            color:"red",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 700.00</Text></Text>

        </TouchableOpacity>
        </View>
        
        </ScrollView>
        
        
        <View style={{
            flexDirection: "row",
            backgroundColor: "#eee",
            height: 50,
            width: "100%",
            justifyContent:"space-between"
            
        }}
        
        
        >
            <Entypo style ={{ 
                paddingLeft:50,
                paddingTop:15, 

            }}
            name="home" size={26} color="brown" />


              
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart list")
            }}
            activeOpacity={0.8}>
              
              <Feather
              style ={{ 
                paddingRight:50,
                paddingTop:15,
                
                
            }}
        
             name="shopping-cart" size={24} color="brown" /></TouchableOpacity>
             <View
        style={{
            justifyContent:"center",
            alignItems: "center",
            position:"absolute",
            paddingLeft:385
            
            
        }}
        >
        <Ionicons
                  style={{
                    
                    position:"absolute",
                    
                }}
        
        name="md-mic-circle-sharp" size={50} color="red" />
        </View>

            
        </View>
        

        </View>
        

       
    )

    
}
