import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    boxTop: {
        height:Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

       // backgroundColor: '#ff0000',
        
    },
    boxMid: {
        height:Dimensions.get('window').height / 4,
         width: '100%',
        //
        paddingHorizontal: 17,
    },
    boxBottom: {
        height:Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    logo:{
        width: 80,
        height: 80,
       
    },
    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
        
    },
    titleImput:{
        marginLeft: 5,
        color:themes.colors.gray,
        marginTop: 20,
    },
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
    }
});