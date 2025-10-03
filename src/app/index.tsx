import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index(){
    function signup(){
        router.navigate("/sign-up");
    }

    function signin(){
        router.navigate("/(drawer)/(tabs)");
    }

    return(
        <View style={styles.container}>

            <Image
                source={require('../../componentes/img/logo.png')}
                style={styles.localLogo}
            />
            <Image
                source={require('../../componentes/img/macacos.png')}
                style={styles.localImage}
            />
            <Text style={styles.title}>Bem vindo ao Macacos App</Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={signin}>
                    <Text style={styles.title}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={signup}>
                    <Text style={styles.title}>Criar Conta</Text>
                </TouchableOpacity> 
            </View>

            <View style={styles.footer}>
                    <Text style={styles.text}>Desenvolvido por Tariq / Senai - 2025</Text>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#a0b788",
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
        gap: 20  
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffffff"
    },
    button: {
        backgroundColor: "#367b3bff",
        borderRadius: 10,
        width: 150,
        height: 50,
        justifyContent: "center", 
        alignItems: "center"

    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
        gap: 16                
    },      
    header:{
        flexDirection:"row",
        width:"100%",
        height:60,
        backgroundColor:"#1E1E1E",
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#444"
    },
    localImage: {
        width: 232,
        height: 232,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 23
    },
    localLogo: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    text: {
        color: "#fff",
        fontSize: 14
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "#1E1E1E",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#444"
      }
});