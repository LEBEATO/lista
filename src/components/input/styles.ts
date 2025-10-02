import { Button, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({

    
  
      BoxInput:{
            width: '100%',
            height: 40,
            borderWidth: 1,
            borderRadius:40,
            marginTop:10,
            flexDirection: 'row',
            alignItems: 'center',
           paddingHorizontal: 5,
           backgroundColor: themes.colors.tgScreen,
           borderColor:themes.colors.tgScreen
        },
        
        input: {
        height: '100%',
        width: '90%',
        borderRadius:40,
        paddingLeft:8,
    },
        titleImput:{
        marginLeft: 12,
        color:themes.colors.gray,
        marginTop: 20,
    },
    Icon:{
        width: '100%',
    },
    Button: {
        width: '10%'
    }
 


})