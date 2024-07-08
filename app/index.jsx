import App from "../components/App";
import Welcome from "../components/Welcome"
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

const Stack = createNativeStackNavigator();


export default function Index() {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Calculator From React Native">
          <Stack.Screen name='Calculator From React Native' component={Welcome}></Stack.Screen>
          <Stack.Screen name='App' component={App}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  ); 
} 


