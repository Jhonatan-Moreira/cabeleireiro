import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Spash from '../views/Spash'
import Login from '../views/Login'
import Main from '../views/drawer'
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const Stack = createStackNavigator()

export default props => (

    <Stack.Navigator initialRouteName="Spash" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Spash" component={Spash} options={{ title: 'Spash', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ title: 'Main', headerShown: false }} />
    </Stack.Navigator>

)