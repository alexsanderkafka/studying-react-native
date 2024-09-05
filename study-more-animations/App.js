import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; 
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      larAnimar: new Animated.Value(0),
      alAnimar: new Animated.Value(50),
      opAnimar: new Animated.Value(0)
    };

    this.carregarGrafico = this.carregarGrafico.bind(this);

    /*

    Animated.timing(
      this.state.alAnimar,
      {
        toValue: 150,
        duration: 2000
      }
    ).start();*/


    /*
    Animated.sequence([
      Animated.timing(
        this.state.larAnimar,
        {
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.alAnimar,
        {
          toValue: 200,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.opacidadeAnimada,
        {
          toValue: 0,
          duration: 2000
        }
      )
    ]).start();*/

    /*
    Animated.parallel([
      Animated.timing(
        this.state.opacidadeAnimada,
        {
          toValue: 1,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.larAnimar,
        {
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.alAnimar,
        {
          toValue: 200,
          duration: 2000
        }
      ),
    ]).start();*/

    /*
    Animated.sequence([
      Animated.timing(
        this.state.opacidadeAnimada,
        {
          toValue: 1,
          duration: 1500
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.larAnimar,
          {
            toValue: 300,
            duration: 2000
          }
        ),
        Animated.timing(
          this.state.alAnimar,
          {
            toValue: 200,
            duration: 2000
          }
        ),
      ]),
      Animated.timing(
        this.state.opacidadeAnimada,
        {
          toValue: 0,
          duration: 1500
        }
      ),
    ]).start();*/

    /*
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.larAnimar,
          {
            toValue: 200,
            duration: 700
          }
        ),
        Animated.timing(
          this.state.larAnimar,
          {
            toValue: 150,
            duration: 700
          }
        )
      ])
    ).start();*/

    Animated.timing(
      this.state.larAnimar,
      {
        toValue: 100,
        duration: 3000
      }
    ).start();

  }

  carregarGrafico(){

    Animated.sequence([
      Animated.timing(
        this.state.opAnimar,
        {
          toValue: 1,
          duration: 400
        }
      ),
      Animated.timing(
        this.state.alAnimar,
        {
          toValue: 300,
          duration: 1000
        }
      ),
    ]).start();

  }

  /*
  
  render(){
    return (
      <View style={styles.container}>

        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: "#4169E1"
        }}>

          <TouchableOpacity
          onPress={this.carregarGrafico}
          >
            <Text style={{
              fontSize: 25,
              color: '#FFF'
            }}>
              Gerar Grafico
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Text>Vendas</Text>
          <Animated.View style={{
              width: this.state.larAnimar,
              height: this.state.alAnimar,
              backgroundColor: "#FF0000",
              justifyContent: 'center',
              opacity: this.state.opAnimar
              }}>
              <Text style={{color: '#FFF', fontSize: 22, textAlign: 'center'}}>R$ 150,00</Text>
          </Animated.View>

        </View>
      </View>
    );
  }*/

  render(){

    let porcentagemAnimate = this.state.larAnimar.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>
        
        <Animated.View style={{
          backgroundColor: '#4169E1',
          width: porcentagemAnimate,
          height: 25
        }}>

        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});

export default App;