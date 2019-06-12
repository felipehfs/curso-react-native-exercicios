import React, { Component} from 'react'
import {View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
    state = {
        numero: this.props.numero || 0
    }
    
    maisUm = () => this.setState((prevState) => ({ numero: prevState.numero + 1}))
    limpar = () => this.setState({ numero: this.props.numero || 0 })

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight
                onPress={this.maisUm}
                onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }   
}