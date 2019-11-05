import React,{Component} from 'react';

import {View, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

export default class Signin extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            senha: ''
        };
    }

    _login = async () => {
        await fetch('http://192.168.4.183:5000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'Content-Type',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
        .then(resposta => resposta.json())
        .then(data => this._pegarToken(data.token))
        .catch(erro => console.warn(erro))
    }

    _pegarToken = async tokenRecebido => {
        if (tokenRecebido != null) {
            try {
                await AsyncStorage.setItem('@roman:token' + tokenRecebido);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {
                
            }
        }
    }

    render(){
        return(
            <View>
                <TextInput placeholder='email'
                    onChange={this.setState({email})}
                />
                <TextInput placeholder='senha'
                    onChange={this.setState({senha})}
                />
                <TouchableOpacity OnPress={this._pegarToken}>
                    <Text>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}