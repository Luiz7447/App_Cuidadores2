import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//import { Dropdown } from 'react-native-element-dropdown';


import styles from './estilo';

export default function tCadastrarInfo() {

    const [nome, setnome] = useState("");
    const [data_de_nasc, set_data_de_nasc] = useState("");
    const [cpf, setcpf] = useState("");
    const [celular, setcelular] = useState("");
    const [endereco, setendereco] = useState("");
    const [cidade, setcidade] = useState("");
    const [estado, setestado] = useState("");
    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");

    const Cadastrar_Avancar =() => {
        Cadastrar();
        Avancao();
    } ;

    function Cadastrar() {

        const body = { nome,  email, senha };
        console.log(body);

        fetch("https://localhost:44396/api/cuidadores", {
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

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    function Avancao() {
        navigation.navigate('tCadastrarFoto')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.marginTop}>
                <Image style={{ width: 100, height: 109, marginTop: -30 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View>
                <Text style={styles.title}>Sejam Bem-vindo(a)</Text>
            </View>

            <ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome Completo"
                        value={nome}
                        onChangeText={(texto) => setnome(texto)}

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de Nascimento"
                        value={data_de_nasc}
                        onChangeText={(texto) => set_data_de_nasc(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={(texto) => setcpf(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Celular"
                        value={celular}
                        onChangeText={(texto) => setcelular(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        value={endereco}
                        placeholder="Endereço"
                        onChangeText={(texto) => setendereco(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value={cidade}
                        onChangeText={(texto) => setcidade(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        value={estado}
                        onChangeText={(texto) => setestado(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(texto) => setemail(texto)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={senha}
                        onChangeText={(texto) => setsenha(texto)}
                    />
                </View>
            </ScrollView>

            <View>
                <RectButton style={styles.buttonNext} onPress={Cadastrar_Avancar}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>

                <RectButton style={styles.buttonReturn} onPress={Voltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </RectButton>
            </View>
        </ImageBackground >
    );
}