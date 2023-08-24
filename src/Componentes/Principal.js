import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Principal({ navigation }) {
    const Separador = () => {
        return <View style={{ marginVertical: 10 }} />
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{marginVertical: 10}}> TELA PRINCIPAL!!</Text>
            <Button
                title="Tela 2"
                onPress={() => { navigation.navigate('Tela_2') }}
            />
            <Separador />
            <Button
                title="Tela 3"
                onPress={() => { navigation.navigate('Tela_3') }}
            />
            <Separador />
            <Button
                title="Tela 4"
                onPress={() => { navigation.navigate('Tela_4') }}
            />
        </View>
    )
}