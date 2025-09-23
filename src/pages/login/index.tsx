import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';


export default function Login() {
  return (
   
      <View style={styles.container}>
         
        <View style={styles.boxTop}>
           <Image source={Logo}
           style={styles.logo}
           
           />
           <Text style={styles.text}>Bem vindo de volta!</Text>
        </View>
            <View style={styles.boxMid}>
                <Text style={styles.titleImput}>Endereço E-mail</Text>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.input} />
                    <MaterialIcons name="email" size={20} color={themes.colors.gray} />
                </View>

                <Text style={styles.titleImput}>Senha</Text>
               <View style={styles.BoxInput}>
                 <TextInput style={styles.input}/>
                <MaterialIcons name="remove-red-eye" size={20} color={themes.colors.gray} />
               </View>
            </View>
            <View style={styles.boxBottom}>
                <Text>Bottom parou 38:07 </Text>
            </View>
        </View>

      
    
  );
}