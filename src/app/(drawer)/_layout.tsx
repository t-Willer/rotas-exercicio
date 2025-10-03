import { MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export default function DrawerLayout(){
    return(
        <GestureHandlerRootView style={styles.container}>
            <Drawer screenOptions={{ 
            title: 'Navegador Macacos', 
            headerShown: true, 
            headerStyle: { backgroundColor: '#429b5888' }, 
            headerTintColor: '#000000ff', 
            drawerActiveTintColor: "green",
            drawerInactiveTintColor: "gray",
            drawerStyle: { backgroundColor: '#beccaeff' }
            }}>
        
                <Drawer.Screen 
                name="(tabs)" 
                options={{
                    drawerLabel: "Lista Macacos",
                    drawerIcon: ({color, size}) => <MaterialIcons 
                    name='home' 
                    color={color} size={size}/>
                }}
                />
                <Drawer.Screen 
                name="perfil" 
                options={{
                    drawerLabel: "Conta",
                    drawerIcon: ({color, size}) => <MaterialIcons name='login' 
                    color={color} size={size}/>
                }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})