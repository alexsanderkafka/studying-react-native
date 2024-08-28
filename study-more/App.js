import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import Pessoas from './src/Pessoas';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{


  constructor(props){
    super(props)

    this.state = {
      feed:[
        {id: '1', nome: 'Maria', idade: 50, email: 'maria@gmail.com'},
        {id: '2', nome: 'Jao', idade: 22, email: 'jao@gmail.com'},
        {id: '3', nome: 'Henrique', idade: 20, email: 'henrique@gmail.com'},
        {id: '4', nome: 'Paulo', idade: 15, email: 'paulo@gmail.com'},
        {id: '5', nome: 'JOSE', idade: 22, email: 'jose@gmail.com'}
      ],
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 2, nome: 'Calabresa', valor: 59},
        {key: 3, nome: 'Quatro queijos', valor: 37},
        {key: 4, nome: 'Brigadeiro', valor: 25.70}
      ],
      valor: 0
    }
  }

  /*
  render(){
    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>

      </View>
    );*/

    /*
    render(){
      return (
        <View style={styles.container}>

          <FlatList
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) => <Pessoa data={item}/>}
          />

        </View>
      );
    }*/

    /*
    render(){

      let pizzasItem = this.state.pizzas.map( (v, k) => {
        return <Picker.Item key={k} value={k} label={v.nome}/>
      });

      return (
        <View style={styles.container}>
          <Text style={styles.logo}>Menu de Pizza</Text>

          <Picker
            selectedValue={this.state.pizza}
            onValueChange={ (itemValue, index) => this.setState({pizza: itemValue})}
          >
            {pizzasItem}
          </Picker>

          <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome} </Text>
          <Text style={styles.pizzas}>R$ { this.state.pizzas[this.state.pizza].valor.toFixed(2) } </Text>
      
        </View>
      );
    }*/

    render(){
      return (
        <View style={styles.container}>
          
          <Slider
            onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#00FF00"
            maximumTrackTintColor="red"
            value={this.state.valor}
          />

          <Text style={{textAlign: 'center', fontSize: 30}}>
            {this.state.valor}
          </Text>

        </View>
      );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});

export default App;
