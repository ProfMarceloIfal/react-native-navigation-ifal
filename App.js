import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Principal } from './src/Componentes/Principal';
import { Tela2 } from './src/Componentes/Tela2';
import { Tela3 } from './src/Componentes/Tela3';
import { Tela4 } from './src/Componentes/Tela4';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Principal' component={Principal} />
        <Stack.Screen name='Tela_2' component={Tela2} />
        <Stack.Screen name='Tela_3' component={Tela3} />
        <Stack.Screen name='Tela_4' component={Tela4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}