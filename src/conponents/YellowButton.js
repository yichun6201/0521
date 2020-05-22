import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
const Stack = createStackNavigator();

const YellowButton = ({navigation}) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    return (
        <ScrollView style={styles.container}>
           <Image style={styles.bp} source={require('../img/bp.png')}/>
       <View style={styles.ph}>
       <Text style={styles.w}>{count}</Text>
      <TouchableOpacity onPress={()=>setCount((count+1))}><Image style={styles.ybtn} source={{url:beok[0].ybtn}}/></TouchableOpacity>
      </View>
      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Yellowsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#79B2B8",
      
    },
    ph:{
        alignItems: 'center'
      },
    ybtn:{
        width:219,
        height:247,
        marginTop:90
    },
    w:{
        color:"#fff",
        fontSize:100,
        fontWeight:"bold",
        opacity:0.5,
        marginTop:75
    },
    bp:{
      position:"absolute",
      width:"100%",
      height:630,
    },
    bottombtn:{
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:70
    },
    backbtn:{
      width:50,
      height:50,
     
    },
    okbtn:{
      width:50,
      height:50,
      marginLeft:230
    }
  });

export default YellowButton;