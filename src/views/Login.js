import React from 'react'
import {
    SafeAreaView,
    View,
    Image,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import ButtonGoTo from '../components/ButtonGoTo'

export default props => (

    <SafeAreaView style={styles.areaView}>
        <View >

            <Image style={styles.splash} tintColor="#FFF" source={require('../image/hairs.png')} />

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="E-mail"
                    placeholderTextColor="#010402"
                // onChangeText={text => this.setState({ email: text })}
                />
            </View>


            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#010402"
                // onChangeText={text => this.setState({ email: text })}
                />
            </View>

            <ButtonGoTo {...props} title="ENTRAR" avancar="Main" />

        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    areaView: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        backgroundColor: '#010402'
        // backgroundColor: '#20B2AA'

    },
    view: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1
    },

    splash: {
        width: 200,
        height: 200,
        marginBottom: 80,
        opacity: 0.9
    },

    button: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    inputView: {
        width: 350,
        backgroundColor: "#FFF",
        borderRadius: 25,
        height: 50,
        marginBottom: 25,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#010402"
    }

});