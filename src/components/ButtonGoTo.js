import React from 'react'
import { Button, StyleSheet } from 'react-native'

export default props => (

    <Button style={styles.button} title={props.title} onPress={() => { props.navigation.navigate(props.avancar) }}>
    </Button>
)


const styles = StyleSheet.create({

    button: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    }
})

