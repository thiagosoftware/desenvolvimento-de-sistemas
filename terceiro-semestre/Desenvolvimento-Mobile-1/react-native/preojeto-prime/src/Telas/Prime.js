import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.titleTopo}>Detalhes do Sistema</Text>
            </View>

            <View style={estilos.listaDescricao}>
                <Text style={estilos.nomeLista}>Lista de compra</Text>
            </View>

            <Image source={{ uri: 'https://picsum.photos/200/300' }}/>

            <View>
                <Text style={estilos.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                     make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
                </Text>

                <Text style={estilos.preco}>
                    R$ 40,00
                </Text>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#333"
    },
    titleTopo: {
        width: "100%",
        textAlign: "center",
        paddingTop: 70,
        fontSize: 20,
        color: "#fff"
    },
    listaDescricao: {
        paddingTop: 20,
        fontSize: 15,
        marginLeft: 20
    },
    nomeLista: {
        fontWeight: "bold"
    },
    descricao: {
        paddingTop: 20,
        color: "#f3f", // Corrigido
        marginLeft: 20,
        fontSize: 20,
        lineHeight: 26
    },
    preco: {
        color: "#cd3333",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 8, // Corrigido
        marginLeft: 20
    }
})
