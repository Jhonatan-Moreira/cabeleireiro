import * as React from 'react';
import { Button, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ButtonMenu from '../components/ButtonMenu'
import Main from './Main'
import { createStackNavigator } from '@react-navigation/stack'



function PerfilScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Main')}
                title="Voltar"
            />
        </View>
    );
}

function SobreScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('Main')} title="Voltar" />
        </View>
    );
}

const Stack = createStackNavigator();

function App({ navigation, props }) {
    return (

        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Cabeleireiro', //Set Header Title
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#010402', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}

            />
        </Stack.Navigator>




        /* */
    );
}



const Drawer = createDrawerNavigator();

export default function MyDrawer() {

    return (

        <Drawer.Navigator initialRouteName="App">
            <Drawer.Screen name="Início" component={App} />
            <Drawer.Screen name="Perfil" component={PerfilScreen} />
            <Drawer.Screen name="Sobre" component={SobreScreen} />
        </Drawer.Navigator>

    );
}

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
                    style={{
                        width: 27,
                        height: 27,
                        marginLeft: 7
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}
