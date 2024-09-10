import React, {useState, useEffect, useMemo, useRef} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null);

  useEffect( () => {

    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');

      if(nomeStorage !== null){
        setNome(nomeStorage)
      }
    }

    getStorage();

  }, [])

  useEffect( () => {

    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage();

  }, [nome]);

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo( () => {
    return nome.length;
  }, [nome]);

  return(
    <View style={styles.container}>

      <TextInput
      placeholder='Seu nome'
      value={input}
      onChangeText={ (texto) => setInput(texto)}
      ref={nomeInput}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>

      <Text style={styles.text}> {nome} </Text>
      <Text style={styles.text}> Tem {letrasNome} letras.</Text>

      <TouchableOpacity style={styles.btn} onPress={novoNome}>
        <Text style={styles.btnText}>Novo nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 200,
    flex: 1
  },
  text:{
    color: '#000',
    fontSize: 35
  },
  btn:{
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 15,
    color: '#FFF'
  }
});