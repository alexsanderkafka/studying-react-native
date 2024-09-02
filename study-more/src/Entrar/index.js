import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

class Entrar extends Component{
    render(){
      return (
        <View style={styles.viewModal}>
              <Text style={styles.textModal}>
                Seja Bem-vindo!!!
              </Text>
              <Button
                title='Fechar'
                onPress={ this.props.fechar }
              />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    viewModal:{
        backgroundColor: '#292929',
        width: '100%',
        height: 350,
        borderRadius: 15,
    },
    textModal:{
        color: '#FFF',
        fontSize: 28,
        paddingTop: 15,
        textAlign: 'center'
    }
});

export default Entrar;
