import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default props => (

    <TouchableOpacity style={{
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#010402',
        borderRadius: 100,
        margin: 8,

    }} >

        <Text style={{ color: 'white', fontSize: 25 }} >
            {props.title}
        </Text>

    </TouchableOpacity>
)