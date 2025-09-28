import React from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/logo.png';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { useState } from 'react';




export default function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
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
                <Text style={styles.titleImput}>Endereço E-mail:</Text>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    />
                    <MaterialIcons name="email" size={20} color={themes.colors.gray} />
                </View>

                <Text style={styles.titleImput}>Senha:</Text>
               <View style={styles.BoxInput}>
                 <TextInput style={styles.input}
                 value={password}
                 onChangeText={setPassword}
                 
                 />
                <MaterialIcons name="remove-red-eye" size={20} color={themes.colors.gray} />
               </View>
            </View>
            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.button} onPress={()=>getLogin()}>
                  {loading ?
                   <ActivityIndicator color={'#fff'} size={"small"}/> : 
                    <Text style={styles.textButton}>Entrar</Text>}
                    
                </TouchableOpacity>
            </View>
            <Text style={styles.textBottom}>Não tem uma conta?
              <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
        </View>

      
    
  );
}