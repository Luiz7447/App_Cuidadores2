import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

import ListaDeUsuarios from "../ListaDeUsuarios/ListaDeUsuarios";

export default function tPesquisa() {

    const [text, setText] = useState("");

    const navigation = useNavigation();
    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground style={styles.container}>
            <SafeAreaView style={styles.view}>
                <View style={styles.cabecalho}>
                    <Ionicons
                        name="chevron-back"
                        size={40}
                        color="black"
                        onPress={Voltar}    
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquisar"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={text}
                        onChangeText={(value) => setText(value)}
                    />
                    <Ionicons
                        name="search"
                        size={40}
                        color="black"
                        onPress={() => { }}
                    />
                </View>
            </SafeAreaView>

            <ScrollView>
                <View style={styles.container}>
                    <ListaDeUsuarios />
                </View>
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5',
        Top: 10,
        paddingVertical: 25
    },

    view: {
        marginTop: StatusBar.currentHeight,
    },

    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },

    input: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 25,
        fontSize: 20,
        paddingHorizontal: 20,
    },
});