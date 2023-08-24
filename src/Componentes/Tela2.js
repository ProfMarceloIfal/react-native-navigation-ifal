import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

export function Tela2({ navigation }) {
    const Separador = () => {
        return <View style={{marginVertical: 10}}/>
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{marginVertical: 10}}> Tela 2 </Text>
            <Button
                title="Tela 2 novamente"
                onPress={() => { navigation.push('Tela_2') }} //push coloca a tela 2 novamente na pilha. Se usar o navigate não acontece nada
            />
            <Separador />
            <Button
                title="Tela 3"
                onPress={() => navigation.navigate('Tela_3')}
            />
        </View>
    )
}