import React from 'react'
import { SafeAreaView, Text, Image, View, StyleSheet, Alert } from 'react-native'

export default props => (

    <SafeAreaView style={styles.areaView} >
        <View style={styles.view}>
            <Image style={styles.splash} tintColor="#FFF" source={require('../image/hairs.png')} ></Image>
            <Text style={styles.text}>Cabeleireiro</Text>
            {this.ShowAlertWithDelay(props)}
        </View>
    </SafeAreaView>
)


ShowAlertWithDelay = (param) => {
    setTimeout(function () {
        // Alert.alert("Alert Shows After 5 Seconds of Delay.")
        { param.navigation.navigate("Login") }

    }, 2000);
}


const styles = StyleSheet.create({
    areaView: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        backgroundColor: '#010402'
    },
    view: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    splash: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 50,
        fontFamily: 'sans-serif-light',
        color: '#FFF',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },

    buttonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    }
});

