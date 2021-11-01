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
                
            }}>(3 items)</Text>

            
             <View
             style={{
                 paddingBottom:60,
                 flexDirection:"row",
                 //backgroundColor: "#eee",
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
           //elevation:2,
           borderRadius:30,
           //borderStyle:"solid",
           borderWidth: 1,
           //padding:15,
           //marginRight:30,
           marginRight:12,
           //marginBottom:5
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
        source={require('./images/bike3.jpg')} 
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
                fontWeight:"bold"
            }}>Narco Bike 

            </Text>

            <EvilIcons style={{
                 marginLeft:110,
                 //marginRight:90,
                 //marginTop:40
            }}
        name="trash" size={28} color="orange"  />

            </View >
            <Text style={{
                marginLeft:10, 
                marginBottom:10,
                fontWeight:"bold",
                color:"grey"
            }}>
                Montain bike
            </Text>
            <View style= {{flexDirection:"row"}}>
            <Text style={{ 
            color:"orange",
            fontWeight:"bold",
            marginLeft:10, 
            //marginBottom:10,
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 2,900.00</Text></Text>

        <AntDesign 

        style={{
            marginLeft:50,
            paddingBottom:5
        }}
    
        name="minuscircle" size={28} color="black" />

        <Text
         style={{
             fontWeight:"bold",
            //marginLeft:20
        }}
        >   1   </Text>
        <AntDesign name="pluscircle" size={28} color="orange" />
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
          //marginTop:5,
           alignItems:"center",
           backgroundColor: "#fff",
           height:100,
           width:95,
           //elevation:2,
           borderRadius:30,
           //borderStyle:"solid",
           borderWidth: 1,
           paddingBottom:70,
           //marginRight:30,
           marginRight:12,
           //marginBottom:5
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
        source={require('./images/Bbike4.jpg')} 
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
                fontWeight:"bold"
            }}>Schiwin Bike 

            </Text>

            <EvilIcons style={{
                 marginLeft:90,
                 //marginRight:90,
                 //marginTop:40
            }}
        name="trash" size={28} color="orange"  />

            </View >
            <Text style={{
                marginLeft:10, 
                marginBottom:10,
                fontWeight:"bold",
                color:"grey"
            }}>
                Road bike
            </Text>
            <View style= {{flexDirection:"row"}}>
            <Text style={{ 
            color:"orange",
            fontWeight:"bold",
            marginLeft:10, 
            //marginBottom:10,
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 4,500.00</Text></Text>

        <AntDesign 

        style={{
            marginLeft:50,
            paddingBottom:5
        }}
    
        name="minuscircle" size={28} color="black" />

        <Text
         style={{
             fontWeight:"bold",
            //marginLeft:20
        }}
        >  1  </Text>
        <AntDesign name="pluscircle" size={28} color="orange" />
        </View>

        </View>

                 </View>
                 <View
             style={{
                 
                 flexDirection:"row",
                 //paddingBottom:10,
                 marginHorizontal: 20,
                 paddingHorizontal:10,
                 
                 

            }}>
             <TouchableOpacity style={{

           marginTop:2,
           alignItems:"center",
           backgroundColor: "#fff",
           height:90,
           width:90,
           //elevation:2,
           borderRadius:30,
           //borderStyle:"solid",
           borderWidth: 1,
           //padding:15,
           //marginRight:30,
           marginRight:12,
           //marginBottom:5
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
        source={require('./images/bike2.jpg')} 
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
                fontWeight:"bold"
            }}>Pinarello Bike 

            </Text>

            <EvilIcons style={{
                 marginLeft:90,
                 //marginRight:90,
                 //marginTop:40
            }}
        name="trash" size={28} color="orange"  />

            </View >
            <Text style={{
                marginLeft:10, 
                marginBottom:10,
                fontWeight:"bold",
                color:"grey"
            }}>
            Urbain 
            </Text>
            <View style= {{flexDirection:"row"}}>
            <Text style={{ 
            color:"orange",
            fontWeight:"bold",
            marginLeft:10, 
            //marginBottom:10,
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 1,700.00</Text></Text>

        <AntDesign 

        style={{
            marginLeft:50,
            paddingBottom:5
        }}
    
        name="minuscircle" size={28} color="black" />

        <Text
         style={{
             fontWeight:"bold",
            //marginLeft:20
        }}
        >   1   </Text>
        <AntDesign name="pluscircle" size={28} color="orange" />
        </View>

        </View>

                 </View>

                 <View
                 style={{
                    marginTop:25,
                    flexDirection: "colomn",
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
                        color:"darkgrey",
                        paddingTop:15,
                        paddingLeft:10,
                           }}
                     
                     > Subtotal</Text>
                     <Text style={{ 
                       color:"orange",
                       fontWeight:"bold",
                       paddingLeft:170,
                       paddingTop:15,
                          }}
                    >$<Text style={{
                       color:"black",
                         fontWeight: "bold",
                         
                     }}> 9,100.00</Text></Text>
                     
                     </View>

                     <View style={{flexDirection:"row"}}>
                     <Text
                     style={{ 
                        color:"darkgrey",
                        paddingTop:15,
                        paddingLeft:10,
                           }}
                     
                     > Shipping Fee</Text>
                     <Text style={{ 
                       color:"orange",
                       fontWeight:"bold",
                       paddingLeft:135,
                       paddingTop:15,
                          }}
                    >$<Text style={{
                       color:"black",
                         fontWeight: "bold",
                         
                     }}> 1,000.00</Text></Text>
                     
                     </View>
                     
                     <Text

                     style={{
                         color:"darkgrey",
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
                       color:"orange",
                       fontWeight:"bold",
                       paddingLeft:190,
                       paddingTop:15,
                          }}
                    >$<Text style={{
                       color:"black",
                         fontWeight: "bold",
                         
                     }}> 10,100.00</Text></Text>
                     
                     </View>

                 </View>
                 

                 <View
                 style={{
                    marginTop:30,
                    backgroundColor: "orange",
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
            name="home" size={26} color="darkgrey" />
            </TouchableOpacity>
              
              
              <Feather
              style ={{ 
                paddingRight:50,
                paddingTop:15,
                
                
            }}
        
             name="shopping-bag" size={24} color="orange" />
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
        
        name="md-mic-circle-sharp" size={50} color="black" />
        </View>

            
        </View>
        
        </View>

        
    )
}