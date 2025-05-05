import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Components/WelcomeScreen';
import HomeScreen from './Components/HomeScreen'; 
import Sitemap from './Components/Sitemap';
import SectionScreen from './Components/SectionScreen'; 
import CategoriesMainScreen from './Components/CategoriesMainScreen'; 
import VegetablesScreen from './Components/VegetablesScreen';
import OffersScreen from './Components/OffersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen  name="Home" component={HomeScreen}  options={{ headerShown: false }} /> 
        <Stack.Screen name="Sitemap" component={Sitemap} options={{ headerShown: false }} /> 
        <Stack.Screen name="SectionScreen" component={SectionScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Categories" component={CategoriesMainScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Vegetables" component={VegetablesScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Offers" component={OffersScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}