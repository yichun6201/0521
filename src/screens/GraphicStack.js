import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Graphic from '../conponents/Graphic';
import beok from "../json/json.json";
const Stack = createStackNavigator();

const GraphicStack = ({navigation}) => 
{
    return(
    <Stack.Navigator>
    <Stack.Screen name="Graphic" component={Graphic} 
    options={{
     headerRight: () =>  <TouchableOpacity onPress={() => ('123')}>
     <Image style={styles.setting} source = {{uri:beok[0].setting}}/>
     </TouchableOpacity>,
    title:"C H A R T",
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#FAF9F9' },
  }}/>
  </Stack.Navigator>
    )}

const styles = StyleSheet.create({
    setting:{
        width:30,
        height:30,
        right:8
      },
});

export default GraphicStack;