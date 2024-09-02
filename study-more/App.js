import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Switch,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Button,
  Modal,
  ViewComponent
} from 'react-native';

import Pessoas from './src/Pessoas';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entrar from './src/Entrar';

class App extends Component{


  constructor(props){
    super(props)

    /*
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
      ],*/

    this.state = {
      valor: 0,
      status: false,
      input: '',
      nome: '',
      teste: '',
      modalVisible: false
    };

    this.gravaNome = this.gravaNome.bind(this);
    this.entrar = this.entrar.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  async componentDidMount(){
    await AsyncStorage.getItem('nome').then(
      (value) => {
        this.setState(
          {
            nome: value
          }
        )
      }
    );
  }

  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;

    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });

    alert('Salvo com sucesso');

    Keyboard.dismiss();
  }

  entrar(){
    this.setState({
      modalVisible: true
    });
  }

  fechar(value){
    this.setState({
      modalVisible: value
    });
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

      /*
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
    }*/

      /*
    render(){
      return (
        <View style={styles.container}>

          <Switch
            value={this.state.status}
            onValueChange={ (valor) => this.setState({status: valor})}
            thumbColor="#FF0000"
          />

          <Text style={{textAlign:'center', fontSize:30}}> {(this.state.status) ? "Ativos" : "Inativo"} </Text>
          
        </View>
      );
    }*/

      /*
    render(){
      return (
        <View style={styles.container}>
          <View style={styles.viewInput}>
            <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={ (text) => this.setState({input: text})}
            
            />

            <TouchableOpacity onPress={this.gravaNome}>
              <Text style={styles.botao}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.nome}>
            {this.state.nome}
          </Text>
          
        </View>

      );
    }*/

    render(){
      return (
        <View style={styles.container}>

          <Button 
            title='Entrar'
            onPress={this.entrar}
          />
          
          <Modal
            animationType='slide'
            visible={this.state.modalVisible}
            transparent={true}
          >
            
            <View style={styles.viewComponentEntrar}>
              <Entrar
                fechar={ () => this.fechar(false)}
              />
            </View>

          </Modal>

        </View>

      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewInput:{
    flexDirection: 'row'
  },
  viewComponentEntrar:{
    margin: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#000',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 5,
  },
  nome:{
    fontSize: 30,
    marginTop: 15,
    textAlign: 'center'
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
