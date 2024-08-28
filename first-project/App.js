import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput} from  'react-native';

/*
export default function App(){
  return(
    <View>
      <Text>Olá Mundo</Text>
    </View>
  );
}*/

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
    this.pegaTexto = this.pegaTexto.bind(this);
    
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome')
      return;
    }

    this.setState({
      nome: 'Welcome: ' + this.state.input
    });

  }

  pegaTexto(texto){
    if(texto.length > 0){
      this.setState({
        nome: 'Welcome: ' + texto
      });
    }else{
      this.setState({
        nome: ''
      });
    }

  }

  render(){
    /*
    return(
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}> {this.state.nome} </Text>
        <Button title="Entrar" onPress={() => this.entrar('João Silva')}/>
      </View>
    );*/

    /*
    return(
      <View style={styles.area}>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text style={styles.textoPrincipal }>Eu sou texto 4</Text>
      </View>
    );*/


    /*
    return(
      <View style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent:'space-around',
                    alignItems: 'center'
                    }}>

        <View style={{height: 50, width:50, backgroundColor: 'green'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'blue', flexDirection:'column'}}>
          <View style={{height: 10, width:10, backgroundColor: 'green'}}></View>

          <View style={{height: 10, width:10, backgroundColor: 'red'}}></View>

          <View style={{height: 10, width:10, backgroundColor: 'yellow'}}></View>
        </View>


      </View>
    );*/

    return(
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => this.setState({input: texto})}
        />

        <Button title='Entrar' onPress={this.entrar}/>

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 50
  },
  textoPrincipal:{
    fontSize: 25,
    color: '#FF0000'
  },
  alinhaTexto:{
    textAlign: 'center'
  },
  container:{
    flex: 1,
  },
  input:{
    marginTop: 50,
    height:45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
});

class Jobs extends Component{
  render(){
    let urlImg = "https://sujeitoprogramador.com/steve.png"

    return(
      <View>
        <Image
        source={{ uri: urlImg }}
        style={{ width: this.props.largura, height: this.props.altura }}
      />

      <Text>
        {this.props.nome}
      </Text>
      </View>
    );
  }
}

export default App;