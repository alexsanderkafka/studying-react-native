import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';

import api from '../services/api';

class Conversor extends Component{

    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaBValor: 0,
            valorConvertido: 0
        }

        this.converter = this.converter.bind(this);
    }

    async converter(){
        let dePara = this.state.moedaA + '_' + this.state.moedaB;
        const reponse = await api.get(`convert?q=${dePara}&compact=ultra&apiKey=COLA_AQUI_SUA_API`);
        let cotacao = reponse.data[dePara];

        let resultado = (cotacao * parseFloat(this.state.moedaBValor))

        this.setState({
            valorConvertido: resultado.toFixed(2)
        });

        Keyboard.dismiss();
    }

    render(){

        const {moedaA, moedaB} = this.props;

        return(
            <View style={styles.container}>

                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

                <TextInput
                placeholder="Valor a ser convertido"
                style={styles.areaInput}
                onChangeText={ (moedaBValor) => this.setState({moedaBValor})}
                keyboardType="numeric"
                />

                <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}>
                        Converter
                    </Text>
                </TouchableOpacity>

                <Text style={styles.valorConvertido}>
                    {(this.state.valorConvertido) === 0 ? '' : this.state.valorConvertido}
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    areaInput:{
        width: 280,
        height: 45,
        backgroundColor: '#CCC',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
    },
    botaoArea:{
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    botaoTexto:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF'
    },
    valorConvertido:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
});

export default Conversor;