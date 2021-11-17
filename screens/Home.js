import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign,Feather } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <ScrollView
      style={{
        backgroundColor: 'lightblue',
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

        <TouchableOpacity
        onPress={()=>{navigation.navigate("Menu")}}>
        <Ionicons name="ios-menu-outline" size={24} color="brown" />
        </TouchableOpacity>
        
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity 
          onPress={()=>{navigation.navigate("Cart")}}>
          <Feather name="shopping-bag" size={20} color="brown" />
          </TouchableOpacity>

          <TouchableOpacity>
          <Ionicons
            style={{ marginLeft: 15 }}
            name="notifications-outline"
            size={20}
            color="brown"
          />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={{backgroundColor:'white', marginTop:20, borderRadius:30, padding:12}}>
      
        <AntDesign name="search1" size={20} color="purple"  /> 
        
        </TouchableOpacity>


      <Text style=
      {{ fontWeight: '700',
       marginTop: 20,
       marginBottom: 20,
       color:'brown',
       fontSize: 20,
       textAlign: 'center'
      }}>Archives</Text>



      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}>
          <TouchableOpacity>
            <Text style={{
               color: 'brown'
             }}>
             All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ 
              color: 'brown'
               }}>Life</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: 'brown' }}>Romance</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 12,}}>
          <TouchableOpacity>
            <Text style={{ color: 'brown' }}>Science</Text>
          </TouchableOpacity>
        </View>
      </View>



      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'column', marginVertical: 10 }}>


         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://m.media-amazon.com/images/I/41q-oeBvqiL.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              The book of life
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              50
            </Text>
          </View>

           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
              
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://cdn.lifehack.org/wp-content/uploads/2015/06/to-be-told.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>


            <Text style={{ color: '#828080', textAlign: 'center' }}>
              To be told
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              80
            </Text>
          </View>

          </View>
         


           <View style={{flexDirection:"row", justifyContent:"space-between"}}>
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i1.wp.com/betterlifethoughts.com/wp-content/uploads/2020/05/Life-changing-Books-6.jpg?fit=400%2C600&ssl=1"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              MindSet
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              60
            </Text>
          </View>
          
           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626719638l/57924373.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Sapiens
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              32
            </Text>

          </View>
          </View>
          

          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://images-na.ssl-images-amazon.com/images/I/51LIiMpgh6L._SX329_BO1,204,203,200_.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              TILFD
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              70
            </Text>
          </View>

           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
              
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614664695l/57007911.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              SEX
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              90
            </Text>
          </View>
          </View>
          </View>


           
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>          
          <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549386187-51y1omNT91L.jpg?crop=1.00xw:0.972xh;0,0.0100xh&resize=480:*"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Gone with Wind
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              15
            </Text>
          </View>

           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
              
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#ffb266',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'brown',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              TLH
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              100
            </Text>
          </View>

          
        </View>
      </View>
    </ScrollView>
  );
}