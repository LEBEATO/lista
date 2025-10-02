import React from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/logo.png';
import { MaterialIcons,AntDesign, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';




export default function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [showpassword, setShowPassword] = useState(true);
     const [loading,setLoading] = useState(false);

     async function getLogin(){
      try {
         setLoading(true);

         if(!email || !password){ 
          return Alert.alert('Atenção','Preencha todos os campos corretamente')
         }
         setTimeout(()=>{
          if(email == 'alexandrebeato2018@gmail.com' && password == '12345678'){
                 Alert.alert('Login efetuado com sucesso')
          }
          else{
                  Alert.alert('Atenção','E-mail ou senha incorretos')
          }
                 setLoading(false)
         },3000)

         
      }catch (error) {
        console.log('erro')
        
      }
        
      
     }

  return (
   
      <View style={styles.container}>
         
        <View style={styles.boxTop}>
           <Image source={Logo}
           style={styles.logo}
           
           />
           <Text style={styles.text}>Bem vindo de volta!</Text>
        </View>
            <View style={styles.boxMid}>
              <Input 
              value={email}
              onChangeText={setEmail}
              title='Endereço E-mail'
              IconRightName='email'
              IconRight={MaterialIcons}
              />

              <Input 
              onChangeText={setPassword}
              value={password}
              title='Senha'
              IconRightName={showpassword ? 'eye-closed' : 'eye'}
              IconRight={Octicons}
              secureTextEntry={showpassword}
              onIconRightPress={() => setShowPassword(!showpassword)}
              />

               
            </View>
            <View style={styles.boxBottom}>
               <Button 
               title='Entrar'
              loading={loading}
              onPress={() => getLogin()}
               />
            </View>
            <Text style={styles.textBottom}>Não tem uma conta?
              <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
        </View>

      
    
  );
}