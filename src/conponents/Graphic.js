import React, { useState }from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity,TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import beok from "../json/json.json"
const Graphic = ({navigation}) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    if(count==0)
    return (
        <ScrollView style={styles.container}>
           <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>MOOD</Text>
             </View>
             <TouchableOpacity onPress={()=>setCount((count==1))}><Image style={styles.angry} source={{url:beok[2].sangry1}}/></TouchableOpacity>
             <TouchableOpacity onPress={()=>setCount((count==0))}><Image style={styles.sad} source={{url:beok[2].ssad2}}/></TouchableOpacity>
         </View>
         <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>DATE</Text>
             </View>
         </View>
         <View style={styles.h1}>
         <View style={styles.line}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         <View style={styles.t1}>
         {/* <TextInput
       style={{fontSize:20,marginLeft:30,width:265,marginTop:30}}
       placeholder="點擊以輸入文字"
       placeholderTextColor="#fff"
       color="#fff"
       multiline="true"
       /> */}
         </View>
         </View>
        {/* <View style={styles.w}>
        <Text style={styles.w1}>04/28</Text>
        <View style={styles.line}></View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].r4}}/>
        <Text style={styles.ryw}>88</Text>
        </View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].y1}}/>
        <Text style={styles.ryw}>45</Text>
        </View>
        <Text style={styles.w1}>04/27</Text>
        <View style={styles.line}></View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].r1}}/>
        <Text style={styles.ryw}>10</Text>
        </View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].ry}}/>
        <Text style={styles.ryw}>  0</Text>
        </View>
        </View> */}
      </ScrollView>
    );
    else return(
      <ScrollView style={styles.container}>
      <View style={styles.h1}>
        <View style={styles.line}></View>
        <View style={styles.mood}>
            <Text style={styles.wm}>MOOD</Text>
        </View>
        <TouchableOpacity onPress={()=>setCount((count==0))}><Image style={styles.angry} source={{url:beok[2].sangry2}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>setCount((count==1))}><Image style={styles.sad} source={{url:beok[2].ssad1}}/></TouchableOpacity>
    </View>
    <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>DATE</Text>
             </View>
         </View>
         <View style={styles.h1}>
         <View style={styles.line}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         <View style={styles.t1}>
         {/* <TextInput
       style={{fontSize:20,marginLeft:30,width:265,marginTop:30}}
       placeholder="點擊以輸入文字"
       placeholderTextColor="#fff"
       color="#fff"
       multiline="true"
       /> */}
         </View>
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
      marginTop:20
  },
  line:{
      width:3,
      height:40,
      backgroundColor:"#fff"
  },
  mood:{
      marginLeft:10,
      marginTop:5
  },
  wm:{
      color:"#fff",
      fontWeight:"bold"
  },
  angry:{
    width:70,
    height:70,
   marginLeft:10
},
sad:{
  width:70,
  height:70,
  marginLeft:10
},
wd:{
  color:"#fff",
  fontWeight:"bold"
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
  height:250,
  backgroundColor:"#A0C8CD",
  borderRadius:30
},
    // w:{
       
    //     alignItems: 'center'
    // },
    // w1:{
    //     color:"#fff",
    //     fontSize:25,
    //     marginTop:30,
    //     letterSpacing:5
    // },
    // line:{
    //     height:2,
    //     width:45,
    //     backgroundColor:"#fff",
    //     marginTop:8
    // },
    // ry:{
    //   flexDirection:"row",
    //   marginTop:20
    // },
    // ryimg:{
    //   width:280,
    //   height:15
    // },
    // ryw:{
    //   color:"#fff",
    //   marginLeft:10,
    //   fontSize:20,
    //   bottom:5,
    //   fontWeight:"bold"
    // }
      
  });

export default Graphic;