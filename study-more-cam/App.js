import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [photo, setPhoto] = useState(null);

  async function openAlbum(){

    const options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if(!result.canceled){
      setPhoto(result.assets[0].uri);
    }else{
      alert("Você não escolheu nenhuma imagem");
    }
  }

  async function openCam() {
    
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhoto: true
    }

    const response = await ImagePicker.launchCameraAsync(options);

    if(!response.canceled){
      setPhoto(response.assets[0].uri);
    }else{
      alert("Você cancelou a escolha de imagem");
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={openAlbum}>
          <Text style={styles.text}>Abrir album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openCam}>
          <Text style={styles.text}>Abrir camera</Text>
        </TouchableOpacity>
      </View>

      {photo !== null && (
        <Image
        source={{ uri: photo }}
        style={styles.image}
        />
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  buttons:{
    flexDirection: 'row',
    marginTop: 50,
    gap: 14,
    marginBottom: 25
  },
  button:{
    backgroundColor: '#121212',
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4
  },
  text:{
    color: '#FFF'
  },
  image:{
    width: '90%',
    height: 300,
    objectFit: 'cover'
  }
});
