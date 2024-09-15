import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {

  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect( () => {

    /*
    Animated.timing(altAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start();*/

    /*
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      }),
    ]).start();*/

    /*
    Animated.parallel([
      Animated.timing(larAnimada, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      }),
    ]).start();*/

    /*
    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(altAnimada, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: false
        }),
      ]),
      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      }),

    ]).start();*/

    /*
    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false
        }),

      ])
    ).start();*/

    /*
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      })
    ]).start( ({ finished }) => {
      alert("ANIMAÇÃO FINALIZADA!");
    });*/



  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['5%', '100%']
  })

  /*
  <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          opacity: opacidadeAnimada,
        }}
      >

  </Animated.View>
  */

  const buttonRef = useRef(null);

  function handleClick(){
    buttonRef.current.bounce();
  }

  return (
    <View style={styles.container}>
      
      <Animatable.Text 
      style={styles.text}
      animation='shake'
      >Isso é apenas um teste
      </Animatable.Text>

      <ButtonAnimated style={styles.button}
      animation='pulse'
      ref={buttonRef}
      onPress={handleClick}
      >
        <Text style={{ color: '#fff'}}>Animar</Text>
      </ButtonAnimated>


    </View>
  );
}

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign: 'center',
    fontSize: 25,
    color: '#000'
  },
  button:{
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  }
});
