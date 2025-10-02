
import React, { forwardRef, LegacyRef} from 'react';
import {  View, Text, TextInput, TextInputProps,TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons,FontAwesome, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';

type IconCompament = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconCompament,
    IconRight?: IconCompament,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,


}



export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
       
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress, ...rest } = Props

const calculateSizeWidth = () => {
    if(IconLeft && IconRight ){
        return '80%'
    }else if(IconLeft || IconRight){
        return '90%'
    }else{
        return '100%'
    }
}

const calculateSizePaddingleft = () => {
    if(IconLeft && IconRight ){
        return 0;
    }else if(IconLeft || IconRight){
        return 10;
    }else{
        return 20;
    }
}

    return(   
        <>
           {title && <Text style={styles.titleImput}>
                 {title}
                  </Text>}
             <View style={[
                styles.BoxInput,
                {paddingLeft: calculateSizePaddingleft() }

             ]}>
                {IconLeft && IconLeftName && (
                <TouchableOpacity onPress={onIconLeftPress} style={styles.Button}>
                     <IconLeft name={IconLeftName as any} size={20} color={themes.colors.gray} style={styles.Icon} />
                </TouchableOpacity>

                )}

                 <TextInput 
                   style={[
                    styles.input
                    ,{width: calculateSizeWidth()}]}
                   {...rest}
                 />
                 {IconRight && IconRightName && (
                <TouchableOpacity onPress={onIconRightPress}  style={styles.Button}>

                     <IconRight name={IconRightName as any} size={20} color={themes.colors.gray} style={styles.Icon} />
                </TouchableOpacity>

                )}
                </View>
        </>        

    )
})