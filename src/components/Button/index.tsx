import React from "react";
import { TouchableHighlightProps, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import { styles } from "./styles";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProps & {
    title: string;
    loading?: boolean;
}

export function Button({...rest}: Props){
    return(
        <TouchableOpacity
         style={styles.button}
         {...rest}
         activeOpacity={0.6}
         
         >
        {rest.loading? <ActivityIndicator />: <Text style={styles.textButton}>{rest.title}</Text>}

        </TouchableOpacity>
    )
}