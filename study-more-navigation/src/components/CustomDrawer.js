import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView
        {...props}
        >
            <View style={styles.container1}>
                <Image
                source={require('../assets/perfil.png')}
                style={styles.image}
                />

                <Text style={styles.welcome}>
                    Bem-vindo!
                </Text>
            </View>

            <DrawerItemList {...props}/>

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container1:{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    image:{
        width: 65,
        height: 65
    },
    welcome:{
        color: '#000',
        fontSize: 17,
        marginTop: 5,
        marginBottom: 35
    }
});