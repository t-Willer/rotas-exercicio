import { router } from 'expo-router';
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SingUp(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function Cadastro() {
        if (!nome || !senha || !confirmarSenha) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        alert(`Conta criada para ${nome}`);
            router.navigate('/')
        }

    function back (){
        if (!router.canGoBack()){
            return Alert.alert('Não é possível voltar')
        }
        router.back();
    }
    return(
        <View style={styles.container}>
            <Image
                source={require('../../componentes/img/logo.png')}
                style={styles.localLogo}
            />

            <Text style={styles.title}>Criar Conta</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#888"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                placeholderTextColor="#888"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />

            <TouchableOpacity style={styles.button} onPress={Cadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={back}>
                <Text style={styles.back}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        backgroundColor: '#a0b788'
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    back: {
        fontSize: 16
    },
    input: {
        width: "70%",
        height: 47,
        backgroundColor: "#fff",
        borderRadius: 7,
        paddingHorizontal: 23,
        fontSize: 16,
        color: "#000000",
        marginBottom: 7,
        borderWidth: 1,
        borderColor: "#333",
      },
      button: {
        width: "70%",
        height: 47,
        backgroundColor: "#367b3bff",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
      },
      localLogo: {
        width: 100,
        height: 100,
        marginBottom: 10
    }
})