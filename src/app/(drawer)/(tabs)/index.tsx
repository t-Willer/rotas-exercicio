import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Macacos(){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../../../componentes/img/logo.png')}
                style={styles.localLogo}
            />

            <Text style={styles.title}>Lista de Macacos</Text>

            <Image
                source={require('../../../../componentes/img/pensando.png')}
                style={styles.localImage}
            />
            <Text style={styles.title}>Macaco Pensante homo inteletus</Text>

            <Image
                source={require('../../../../componentes/img/pensando2.png')}
                style={styles.localImage}
            />
            <Text style={styles.title}>Macaco Pai Pensante homo inteletus</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>       
        </ScrollView>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Importante para ScrollView
        justifyContent:"center",
        alignItems:"center",
        gap:13,
        backgroundColor: '#a0b788'
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#000000ff"
    },
    textButton: {
        fontSize: 16,
        color: '#fff'
    },
    button: {
        backgroundColor: "#367b3bff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    localLogo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    localImage: {
        width: 232,
        height: 232,
        marginBottom: 1,
        marginTop: 1
    }
});

export const screenOptions = {
  tabBarStyle: null, 
  tabBarButton: () => null, 
  title: '' 
};