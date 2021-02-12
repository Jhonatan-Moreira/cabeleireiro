import TextCentral from '../components/ButtonMenu'
import React from 'react';
import MyDrawer from './drawer'
import ButtonMenu from '../components/ButtonMenu'
import {
    Button,
    View,
    Text,
    SafeAreaViewBase,
    Image,
    ImageBackground,
    SafeAreaView
} from 'react-native';

const image = { uri: "https://31114.cdn.simplo7.net/static/31114/sku/cetim-cetim-estampado-cetim-cabeleireiro-fundo-branco--p-1607786959429.jpeg" };


export default props => (

    <SafeAreaView style={{ flex: 1 }}>
        <View style={{
            flex: 1,
        }}>

            <ImageBackground style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: "column",
                opacity: 0.9
            }} source={image}>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 170
                }}>

                    <ButtonMenu {...props} title="function 1"></ButtonMenu>
                    <ButtonMenu {...props} title="function 2"></ButtonMenu>
                </View>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'

                }}>
                    <ButtonMenu {...props} title="function 3"></ButtonMenu>
                    <ButtonMenu {...props} title="function 4"></ButtonMenu>
                </View>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <ButtonMenu {...props} title="function 5"></ButtonMenu>
                    <ButtonMenu {...props} title="function6"></ButtonMenu>

                </View>
            </ImageBackground>

        </View>
    </SafeAreaView>
)