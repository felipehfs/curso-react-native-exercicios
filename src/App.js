import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Inverter, MegaSena } from './components/multi'
import ParImpar from './components/ParImpar'
import Simples from './components/Simples'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Flexível!"/>
        <ParImpar number={30} />
       <Inverter texto="React nativo!" />
       <MegaSena numeros={6} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})