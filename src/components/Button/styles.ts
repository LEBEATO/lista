import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({

     button:{
        width: 280,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 40,
        backgroundColor: themes.colors.primary,

        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        },
       textButton:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
       
    },
    
    
})
