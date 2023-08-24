import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

export function Tela3({ navigation }) {
    const Separador = () => {
        return <View style={{ marginVertical: 10 }} />
    }
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{marginVertical: 10}}>
                Tela 3
            </Text>
            <Button
                title="Voltar "
                onPress={() => { navigation.goBack() }} //Volta para tela anterior 
            />
            <Separador />
            <Button
                title="Principal"
                onPress={() => { navigation.popToTop() }}
            />
            <Separador />
            <Button
                title="Tela 4"
                onPress={() => { navigation.navigate('Tela_4', { nome: 'Marcos', idade: '33' }) }}
            />
        </View>
    )
}