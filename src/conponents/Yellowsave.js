import React, { useState }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,Linking,TouchableOpacity,TextInput,Input} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
import { setConfigurationAsync } from 'expo/build/AR';

const Stack = createStackNavigator();
const Yellowsave = ({navigation}) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    return (
    <ScrollView style={styles.container}>
         <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.date}>
                 <Text style={styles.wd}>DATE</Text>
                 <Text style={styles.wday}>2 0 2 0 . 0 5 . 0 5 </Text>
             </View>
         </View>
         <View style={styles.h1}>
         <View style={styles.line2}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         <View style={styles.t1}>
         <TextInput
       style={{fontSize:20,marginLeft:30,width:265,marginTop:30}}
       placeholder="點擊以輸入文字"
       placeholderTextColor="#fff"
       color="#fff"
       multiline="true"
       />
         </View>
         <TouchableOpacity onPress={() => navigation.navigate("Chart")}><Image style={styles.sbtn} source={{url:beok[2].ysave}}/></TouchableOpacity>
         </View>
         
    </ScrollView>
    );

  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#79B2B8",
    },
    h1:{
        flexDirection:"row",
        marginLeft:20,
        marginTop:50
    },
    line:{
        width:3,
        height:80,
        backgroundColor:"#fff"
    },
    date:{
        marginLeft:10,
        marginTop:5
    },
    wd:{
        color:"#fff",
        fontWeight:"bold"
    },
    wday:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        marginTop:30
    },
    line2:{
        width:3,
        height:40,
        backgroundColor:"#fff"
    },
    why:{
        marginLeft:10,
        marginTop:5
    },
    h3:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10
    },
    t1:{
        width:320,
        height:340,
        backgroundColor:"#A0C8CD",
        borderRadius:30,
        shadowColor:"#000",
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.2,
    },
    sbtn:{
        width:137,
        height:45,
        marginTop:28
      }
  });

export default Yellowsave;