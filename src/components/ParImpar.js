import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../styles'

function parOuImpar(num) {
    const label = num % 2 === 0? 'Par': 'Impar'
    return <Text style={Padrao.ex}>{label}</Text>
}

export default props =>
    <View>
        {parOuImpar(props.number)}
        {/* 
            props.number % 2 === 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
             */
        }
    </View>