import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';
import {Label, Item, Input, Icon} from 'native-base';

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {userEmail: null, userPass: null};
    }

    loginAction = () => { 
        this.props.actionLogin(this.state);
    }
    
    render() {
        return(
            <View>

                <Item floatingLabel>
                    <Label style={style.textInputLabel}>Email</Label>
                    <Input style={style.textField}
                        placeholderTextColor="#FFF" 
                        onChangeText={(text) => this.setState({userEmail: text})}
                    />
                </Item>
                {this.props.emailError && <Text style={{color: 'red'}}>{this.props.emailError}</Text>}

                <Item floatingLabel style={style.inputItem}>
                    <Label style={style.textInputLabel} >Password</Label>
                    <Input style={style.textField}
                            placeholderTextColor="#FFF" 
                            onChangeText={(text) => this.setState({userPass: text})}
                    />
                </Item>
                {this.props.passError && <Text style={{color: 'red'}}>{this.props.passError}</Text>}

                <TouchableHighlight
                    style = {style.button}
                    onPress={() => this.loginAction()}
                >
                    <Text style = {style.buttonText} >LOGIN</Text>
                </TouchableHighlight>
                {this.props.showLoading && <ActivityIndicator />} 
            </View>
        );
    }
}

const style = StyleSheet.create({
    inputItem: {
        marginTop: 10,
    },
    textInputLabel: {
        color: 'white',
    }, 
    textField: {
        height: 45,
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
    },
    button: {
        height: 45,
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 'auto',
        backgroundColor: '#3787D9'
    },
    buttonText: {
        marginVertical: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
