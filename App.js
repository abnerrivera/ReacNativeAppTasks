//navigation
import { NavigationContainer } from '@react-navigation/native'; //crea un contenedor navegable
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //funcion a ejecutar para navegar entre screens
//components
import HomeScren from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator(); //funcion para navegar

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* las rutas se leen de arriab a abajo la primera sera la primera en verse */}
        <Stack.Screen name='HomeScreen' component={HomeScren} />
        <Stack.Screen name='TaskFormScreen' component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
