import React from 'react'
import {ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: "Ana", nota: 5.6},
    { id: 2, nome: "Bia", nota: 2.4 },
    { id: 3, nome: "Carlos", nota: 7.6},
    { id: 4, nome: "Pedro", nota: 12.33},
    { id: 5, nome: "Jonathan", nota: 12.0},
    { id: 6, nome: "Fernando", nota: 12.0},
    { id: 7, nome: "Maria", nota: 12.0},
    { id: 8, nome: "Carla", nota: 12.0},
    { id: 9, nome: "Gabriela", nota: 12.0},
    { id: 10, nome: "Felipe", nota: 12.0},
    { id: 11, nome: "Andre", nota: 12.0},
    { id: 12, nome: "Beatriz", nota: 11.0},
    { id: 13, nome: "Julio", nota: 12.0},
    { id: 14, nome: "Cesar", nota: 12.0},
    { id: 15, nome: "Diego", nota: 12.0},
    { id: 16, nome: "Enoque", nota: 12.0},
    { id: 17, nome: "Gleison", nota: 12.0},
    { id: 18, nome: "Maria", nota: 12.0}
]

const itemestilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: "#DDD",
    borderWidth: 0.5,
    borderColor: "#222",
    // flex,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
}

export const Aluno = props =>
    <View style={itemestilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} 
                renderItem={renderItem} 
                keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}