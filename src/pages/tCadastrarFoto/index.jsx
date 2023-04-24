import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import Routes2 from '../../routes2';
import styles from './estilo';

export default function tCadastrarFoto() {

    const [imagem, setImagem] = useState("");

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (result.canceled) {
            return;
        }
        setImagem(result.assets[0].uri);
    }

    const Cadastrar_Avancar =() => {
        Cadastrar();
        Avancao();
    } ;

    function Cadastrar() {

        const body = { imagem };

        fetch("https://localhost:44340/api/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Usuário cadastrado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao cadastrar resultado");
            });
    }

    const navigation = useNavigation();
    function Avancao() {
        navigation.navigate('tLogin')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground style={styles.container}>

            <View style={styles.main}>
                <Text style={styles.title}>Selecione sua melhor foto (png, jpg, svg) </Text>
                <Image source={{ uri: imagem }} style={styles.image} />
            </View>

            <TextInput
                style={styles.description}
                placeholder="Descrição..."
            />

            <RectButton style={styles.button} onPress={selecionarImagem}>
                <Text style={styles.buttonText}>Escolher Foto</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={Cadastrar_Avancar}>
                <Text style={styles.buttonText}>Avançar</Text>
            </RectButton>

            <RectButton style={styles.buttonReturn} onPress={Voltar}>
                <Text style={styles.buttonText}>Voltar</Text>
            </RectButton>
        </ImageBackground>
    );
}