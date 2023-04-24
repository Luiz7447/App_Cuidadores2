import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput, Image } from "react-native";
import { ScrollView, Text } from 'react-native-web';

function CardUsuario({ usuario }) {
    return (
        <View style={styles.view}>

            <View style={styles.view2}>
                <Text>{usuario.nome}</Text>
                <Text>{usuario.cep}</Text>
                <Text>{usuario.data_de_nasc}</Text>
                <Text>{usuario.email}</Text>
                <Text>{usuario.celular}</Text>
            </View>

            <View style={styles.view3}>
                <Image source={{ uri: usuario.imagem }} style={styles.imgcontainer} />
            </View>
        </View>

    );
}

export default CardUsuario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5'
    },

    view: {
        padding: 20,
        backgroundColor: 'grey',
        borderRadius: 15,
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20
    },

    view2: {
        marginLeft: 100,
        textAlign: 'center'
    },

    view3: {
        alignItems: 'flex-start'
    },

    imgcontainer: {
        border: 200,
        borderColor: 'Black',
        borderRadius: 20,
        marginRight: 210,
        marginTop: -95,
        width: 110,
        height: 110
    },

    texto: {
        textAlign: 'center'
    }
});