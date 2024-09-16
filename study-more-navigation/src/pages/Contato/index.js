import React, {useLayoutEffect} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native'

export default function Contato(){
    return(
        <View style={styles.container}>
            <Text>Pagina Contato</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});