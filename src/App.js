import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import TelaA from './views/Spash'
import TelaB from './views/Login'
import TelaC from './views/Main'

export default props => (

    <SafeAreaView style={{flex:1}}>
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
)