import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles'
import { AntDesign,Entypo,FontAwesome, MaterialIcons } from "@expo/vector-icons";


 


export default({state,navigation})=> {
    return(
       <View style={styles.tabArea}>
          <TouchableOpacity style={styles.tabItem}>
             <AntDesign 
               name="bars"
               style={{fontSize: 30}}
             />
          </TouchableOpacity>

           <TouchableOpacity  style={styles.tabItemButton}>
            <View style={{width:'100%', left:10, top:4}}>
               <Entypo 
                name="plus"
                size={30}
                color={'#fff'}
               />
            </View>
            <View style={{width:'100%',flexDirection: "row-reverse", right:10,bottom:10}}>
                <MaterialIcons 
                  name="edit"
                  size={30}
                  color={'#fff'}
                />
            </View>
          </TouchableOpacity>

           <TouchableOpacity  style={styles.tabItem}>
            <FontAwesome 
               name="user"
               style={{fontSize: 30}}
             />
            
          </TouchableOpacity>
       </View>
    )
}