import React from "react";
import { View, Text, Button } from "react-native";

export function Tela4( {navigation, route } ) {
    return (
        <View style={{flex:1,  alignItems:'center'}}>
            <Text> Meu nome é {route.params?.nome}</Text>
            <Text style={{marginVertical: 10}}> Minha idade é {route.params?.idade}</Text>
            <Button title="Principal"  onPress={ () => {navigation.popToTop()}}/>
        </View>
    )
}