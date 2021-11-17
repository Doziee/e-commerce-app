import React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Login = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: 'https://thebftonline.com/wp-content/uploads/2020/12/books.jpeg' }} resizeMode="cover" style={styles.image}>
    
      <TouchableOpacity 
     style={{ 
       justifyContent: 'center', 
       backgroundColor: "black", 
       borderRadius:10, 
       padding:5,
       paddingHorizontal: 20,
       marginTop:15,
       opacity:0.7,
       flexDirection:"row",
       marginHorizontal:20
       }}>

     <Text style={{fontSize:20,color:"#B266FF"}}>Email</Text>

    </TouchableOpacity>

    <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       backgroundColor: "black", 
       borderRadius:10, 
       padding:5,
       paddingHorizontal: 20,
       marginHorizontal:20,
       marginTop:10,
       opacity:0.7,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:20,color:"#B266FF"}}>Password</Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <Text style={{
      fontSize:20,
      alignItems:"center",
      color:"black",
      fontWeight:700,
      marginTop:10,
      marginHorizontal:20,
      opacity:0.7,
      textAlign:'center'        
      }}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=> {
    navigation.navigate("Home")
    }}
     style={{ 
       justifyContent: 'center',
       backgroundColor: "black", 
       borderRadius:10, 
       padding:5,
       paddingHorizontal: 20,
       marginHorizontal:20,
       marginTop:20,
       opacity:0.7,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:20,color:"#B266FF"}}>Login</Text>
    </TouchableOpacity>

     <Text style={{
       fontSize:20,
       alignItems:"center",
      color:"#9933FF",
      fontWeight:500,
      marginTop:20,
      textAlign:'center',
      }}>or</Text>
    
     <Text style={{fontSize:23,
     color:"#000",
     fontFamily: 'Cochin',
     textAlign:"center",
     marginTop:20,
     fontWeight:700,
     }}>Continue with </Text>
    

  <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:400, 
       padding: 10,
       paddingHorizontal: 20,
       marginTop:10,
       marginHorizontal:140,
       flexDirection:"row",
       backgroundColor:"black",
       opacity:0.7,
       }}>
  <AntDesign name ="apple1" size={24} color="#B266FF"/>
    </TouchableOpacity>
  
  <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:400, 
       padding: 10,
       paddingHorizontal: 20,
       marginHorizontal:140,
       marginTop:10,
       flexDirection:"row",
       backgroundColor:"black",
       opacity:0.7,
       }}>
  <AntDesign name ="google" size={24} color="#B266FF"/>
    </TouchableOpacity>

  <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:400, 
       padding: 10,
       paddingHorizontal: 20,
       marginHorizontal:140,
       marginTop:10,
       flexDirection:"row",
       backgroundColor:"black",
       opacity:0.7,
       }}>
  <AntDesign name ="facebook-square" size={24} color="#B266FF"/>
    </TouchableOpacity>
  
   <Text style={{
      marginTop:15,
      fontWeight:500,
      color:"#000",
      textAlign:'center',
      fontSize:20
    }}
    >Don't have an account? 
    <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
    <Text style={{color: "#B266FF",textAlign:'center'}}> Sign Up</Text>
    </TouchableOpacity>
    </Text>
    

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
});

export default Login;