import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
 
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function CartList(params) {
  const navigation = params.navigation;
  return (

    <View style={{ backgroundColor: 'white', paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PopularProducts');
          }}>
          <Ionicons name="arrow-back" size={20} style={{ marginLeft: 15 }} />
        </TouchableOpacity>


        <Text style={{ marginLeft: 80, fontWeight: 'bolder' }}>Cart list</Text>
      </View>



      <View>
        <Text style={{ marginLeft: 117 }}>(3 items)</Text>
      </View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={{uri: "https://m.media-amazon.com/images/I/41q-oeBvqiL.jpg"}}
            />
          </View>
        </View>





        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
           TBOL
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Science
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'green' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              50.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>





      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          justifyContent: 'space-between',

          borderRadius: 10,
          padding: 5,

          marginTop: 5,
        }}>
        <View>
          <View
            style={{
              borderRadius: 10,
              width: 150,
              height: 'auto',
              backgroundColor: 'rgb(240, 241, 242)',
              marginTop: 5,
              padding: 5,
            }}>
            <View>
              <Image
                style={{
                  width: 90,
                  marginTop: 15,
                  

                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={{uri: "https://cdn.lifehack.org/wp-content/uploads/2015/06/to-be-told.jpg"}}
              />
            </View>
          </View>
        </View>




        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            To be told
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Life
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'green' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              80.00
            </Text>
          </Text>
        </View>


<Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>




      <View>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',

            borderRadius: 10,
            padding: 5,
            marginTop: 5,
          }}>
          <View
            style={{
              borderRadius: 10,
              width: 150,
              height: 'auto',
              backgroundColor: 'rgb(240, 241, 242)',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <Image
                style={{
                  width: 130,
                  marginTop: 15,

                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={{uri: "https://i1.wp.com/betterlifethoughts.com/wp-content/uploads/2020/05/Life-changing-Books-6.jpg?fit=400%2C600&ssl=1"}}
              />
            </View>
          </View>




          <View>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Mindset
            </Text>

            <Text
              style={{
                color: 'rgb(174, 175, 176)',
                textAlign: 'center',
                fontWeight: 'bolder',
                marginLeft: 5,
              }}>
             Science
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'green' }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                60.00{' '}
              </Text>{' '}
            </Text>
          </View>
          <Ionicons name="remove-circle" size={20} />
          <Text>1</Text>
          <Ionicons name="add-circle" size={20} color="orange" />
        </View>
      </View>





      <View>
        <View
          style={{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'rgb(rgb(240, 241, 242)',
            borderRadius: 15,
            padding: 10,
            marginTop: 15,
          }}>
          <Text>
            <Text
              style={{
                color: 'rgb(174, 175, 176)',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Subtotal
            </Text>
            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'green', marginLeft: 50 }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                190.00
              </Text>
            </Text>
          </Text>

          <Text>
            <Text
              style={{
                color: 'rgb(174, 175, 176)',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Shipping fee
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'green', marginLeft: 80 }}>$</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bolder',
                  marginLeft: 100,
                }}>
                190.00
              </Text>
            </Text>
          </Text>

          <Text>------------------------------------------</Text>

          <Text>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Total
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'green', marginLeft: 110 }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                190.00
              </Text>
            </Text>
          </Text>
        </View>
      </View>


<TouchableOpacity
        style={{
          padding: 10,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: 'orange',
        }}>
        <Text style={{ fontWeight: 'bolder', color: 'white' }}>
          Proceed to Checkout
        </Text>
      </TouchableOpacity>




      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>


        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons name="home" size={26} style={{ marginLeft: 10 }} />
        </TouchableOpacity>

       
       
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
           source={{uri: "https://media.istockphoto.com/photos/blue-book-picture-id1281955543?b=1&k=20&m=1281955543&s=170667a&w=0&h=ZmwacrjQewEU3RqJLYufA-Bi7JVOI2JgcB8X0o7vPeI="}}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>




        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cartlist');
          }}>
          <FontAwesome
            name="shopping-cart"
            size={22}
            style={{ marginRight: 10, color: 'orange' }}
          />
        </TouchableOpacity>

        

        <TouchableOpacity>
          <FontAwesome name="comments-o" size={28} style={{}} />
        </TouchableOpacity>


      </View>
    </View>
  );
}
