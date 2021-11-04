//please run code on web, not on a simulator or Expo Go.
// I had issues while configuring it for those devices.

import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Cart({navigation}){
    return(
        <View
        style={{ flex:1, backgroundColor: "white", }}
        
        >
            
            <Text style={{
                paddingTop:55,
                paddingLeft:150,
                fontWeight: 'bold',
            }}> Cart list</Text>
            <Text style={{
                color: 'grey',
                paddingLeft:150,
                
            }}>(3 books)</Text>

            
             <View
             style={{
                 paddingBottom:60,
                 flexDirection:"row",
                 height:100,
                 elevation:15,
                 borderRadius:10,
                 marginVertical: 10,
                 marginHorizontal: 20,
                 paddingHorizontal:10,
                 alignItems:"center",
                 marginTop:50

            }}>
             <TouchableOpacity style={{
          marginTop:2,
           alignItems:"center",
           backgroundColor: "#fff",
           height:90,
           width:90,
           borderRadius:30,
           borderWidth: 1,
           marginRight:12,
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5, marginRight:10}}
          name="heart-circle" size={24} color="brown" />
        <Image
         style={{
            
            width: 60,
            height: 55,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/The girl in red.jpg')} 
        />
        </TouchableOpacity>

        <View>
            <View
            style={{
                flexDirection: "row",
            }}>
            
            <Text style={{
                marginLeft:10, 
                marginBottom:15,
                fontWeight:"bold",
                color: "lightblue"
            }}>The Girl In Red

            </Text>

            <EvilIcons style={{
                 marginLeft:65,
            }}
        name="trash" size={28} color="red"  />

            </View >
            <Text style={{
                marginLeft:10, 
                marginBottom:10,
                fontWeight:"bold",
                color:"grey"
            }}>
               Genre: Romance
            </Text>
            <View style= {{flexDirection:"row"}}>
            <Text style={{ 
            color:"red",
            fontWeight:"bold",
            marginLeft:10, 
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 500.00</Text></Text>

        <AntDesign 

        style={{
            marginLeft:50,
            paddingBottom:5
        }}
    
        name="minuscircle" size={28} color="red" />

        <Text
         style={{
             fontWeight:"bold",
            //marginLeft:20
        }}
        >   1   </Text>
        <AntDesign name="pluscircle" size={28} color="green" />
        </View>

        </View>

                 </View>

                 <View
             style={{
                 flexDirection:"row",
                 paddingBottom:20,
                 marginHorizontal: 20,
                 paddingHorizontal:10,

            }}>
             <TouchableOpacity style={{
           alignItems:"center",
           backgroundColor: "#fff",
           height:100,
           width:95,
           borderRadius:30,
           borderWidth: 1,
           paddingBottom:70,
           marginRight:12,
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5, marginRight:10}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            
            width: 60,
            height: 65,
           
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/no place like here.jpg')} 
        />
        </TouchableOpacity>

        <View>
            <View
            style={{
                flexDirection: "row",
            }}>
            
            <Text style={{
                marginLeft:10, 
                marginBottom:15,
                fontWeight:"bold",
                color: "lightblue"
            }}>No Place Like Here

            </Text>

            <EvilIcons style={{
                 marginLeft:40,
            }}
        name="trash" size={28} color="red"  />

            </View >
            <Text style={{
                marginLeft:10, 
                marginBottom:10,
                fontWeight:"bold",
                color:"grey"
            }}>
                Genre: Science
            </Text>
            <View style= {{flexDirection:"row"}}>
            <Text style={{ 
            color:"red",
            fontWeight:"bold",
            marginLeft:10, 
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 350.00</Text></Text>

        <AntDesign 

        style={{
            marginLeft:50,
            paddingBottom:5
        }}
    
        name="minuscircle" size={28} color="red" />

        <Text
         style={{
             fontWeight:"bold",
        }}
        >  1  </Text>
        <AntDesign name="pluscircle" size={28} color="green" />
        </View>

        </View>

                 </View>
                 <View
             style={{
                 
                 flexDirection:"row",
                 marginHorizontal: 20,
                 paddingHorizontal:10,
                 
                 

            }}>
             <TouchableOpacity style={{

           marginTop:2,
           alignItems:"center",
           backgroundColor: "#fff",
           height:90,
           width:90,
           borderRadius:30,
           borderWidth: 1,
           marginRight:12,
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5, marginRight:10}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            
            width: 60,
            height: 55,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/Memory.jpg')} 
        />
        </TouchableOpacity>

        <View>
            <View
            style={{
                flexDirection: "row",
            }}>
            
            <Text style={{
                marginLeft:10, 
                marginBottom:15,
                fontWeight:"bold",
                color: "lightblue"
            }}>Memory 

            </Text>

            <EvilIcons style={{
                 marginLeft:110,
            }}
        name="trash" size={28} color="red"  />

            </View >
            <Text style={{
                marginLeft:10, 
                marginBottom:10,
                fontWeight:"bold",
                color:"grey"
            }}>
            Genre: Life
            </Text>
            <View style= {{flexDirection:"row"}}>
            <Text style={{ 
            color:"red",
            fontWeight:"bold",
            marginLeft:10, 
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 700.00</Text></Text>

        <AntDesign 

        style={{
            marginLeft:50,
            paddingBottom:5
        }}
    
        name="minuscircle" size={28} color="red" />

        <Text
         style={{
             fontWeight:"bold",
        }}
        >   1   </Text>
        <AntDesign name="pluscircle" size={28} color="green" />
        </View>

        </View>

                 </View>

                 <View
                 style={{
                    marginTop:25,
                    backgroundColor: "#eee",
                    height:150,
                    width: "100%",
                    borderRadius:30,
                    
                     
                 }}
                 
                 >
                     <View
                     style={{
                        
                        flexDirection: "row",
                        
                         
                     }}
                     >

<Text
                     style={{ 
                        color:"grey",
                        paddingTop:15,
                        paddingLeft:10,
                           }}
                     
                     > Subtotal</Text>
                     <Text style={{ 
                       color:"red",
                       fontWeight:"bold",
                       paddingLeft:163,
                       paddingTop:15,
                          }}
                    >$<Text style={{
                       color:"black",
                         fontWeight: "bold",
                         
                     }}> 1,550.00</Text></Text>
                     
                     </View>

                     <View style={{flexDirection:"row"}}>
                     <Text
                     style={{ 
                        color:"grey",
                        paddingTop:15,
                        paddingLeft:10,
                           }}
                     
                     > Shipping Fee</Text>
                     <Text style={{ 
                       color:"red",
                       fontWeight:"bold",
                       paddingLeft:135,
                       paddingTop:15,
                          }}
                    >$<Text style={{
                       color:"black",
                         fontWeight: "bold",
                         
                     }}> 34.00</Text></Text>
                     
                     </View>
                     
                     <Text

                     style={{
                         color:"grey",
                     }}
                     
                     > ------------------------------------------------</Text>

                     <View style= {{flexDirection:"row"}}>
                     <Text
                     style={{ 
                        fontWeight:"bold",
                        paddingTop:15,
                        paddingLeft:10,
                           }}
                     
                     > Total</Text>
                     <Text style={{ 
                       color:"red",
                       fontWeight:"bold",
                       paddingLeft:183,
                       paddingTop:15,
                          }}
                    >$<Text style={{
                       color:"black",
                         fontWeight: "bold",
                         
                     }}> 1,584.00</Text></Text>
                     
                     </View>

                 </View>
                 

                 <View
                 style={{
                    marginTop:30,
                    backgroundColor: "green",
                    height:50,
                    width: "100%",
                    borderRadius:30,
                    alignItems:"center",
                    
                     
                 }}>
                     <TouchableOpacity>
                     <Text
                     style={{
                        marginTop:15,
                        fontSize:15,
                        fontWeight:"bold",
                        color: "#fff",
                        
                         
                     }}
                     > Proceed to checkout</Text>
                     </TouchableOpacity>
                     
                     

                 </View>
                 <View style={{
            flexDirection: "row",
            backgroundColor: "#eee",
            height: 50,
            width: "100%",
            justifyContent:"space-between",
            marginTop:35
            
        }}    
        >
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Home")
            }}
            activeOpacity={0.8}>

            <Entypo style ={{ 
                paddingLeft:50,
                paddingTop:15, 

            }}
            name="home" size={26} color="brown" />
            </TouchableOpacity>
              
              
              <Feather
              style ={{ 
                paddingRight:50,
                paddingTop:15,
                
                
            }}
        
             name="shopping-bag" size={24} color="brown" />
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