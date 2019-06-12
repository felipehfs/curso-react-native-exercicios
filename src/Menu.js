import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import ParImpar from './components/ParImpar'
import Simples from './components/Simples'
import Plataformas from './components/plataformas'
import { Inverter, MegaSena } from './components/multi'
import Contador from './components/Contador'
import Evento from './components/Evento'
import { Avo } from './components/ComunicacaoDireta'
import ValidarProp from './components/ValidarProp'
import TextoSincronizado  from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: { screen: Flex },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: "Lista flex" }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: "Texto sincronizado"}
    },
    Comunicacao: {
        screen: () => <Avo nome="Leonardo"/>,
        navigationOptions: {
            title: "Avô"
        }
    },
    Evento: {
        screen: Evento
    },
    ValidarProp: {
        screen: () => <ValidarProp label="Teste" ano={18}/>
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador numero={8} />,
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {
            title: 'Mega Sena'
        }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: "Par & Impar"}
    },
    Simples: {
        screen: () => <Simples texto="Flexivel!!!"/>
    }
}, { drawerWidth: 300 })