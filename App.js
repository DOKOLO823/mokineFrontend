import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding1 } from './ecrans/onboarding1';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Onboarding2 } from './ecrans/onboarding2';
import { Text, TouchableOpacity } from 'react-native';
import { Onboarding3 } from './ecrans/onboarding3';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
 <NavigationContainer>
      <Stack.Navigator initialRouteName='onboarding1'>
      <Stack.Screen name="onboarding1" component={Onboarding1} options={{
        headerShown: false
      }} />
       <Stack.Screen name="onboarding2" component={Onboarding2} options={({navigation})=>({
        headerShown: true,
        headerTransparent: true,

        headerTitle: "",
          // Utilisation d'un bouton back custom
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "white", // ✅ Fond du bouton back
                
                borderRadius: 50/2,
                width: 40,
                heigth: 100,
                marginLeft: 10,
              }}
            >
              <Text style={{ color: "black",
              position: 'relative',
              bottom: 7,
              textAlign: 'center',
            
               
                fontSize: 28 }}>←</Text>
            </TouchableOpacity>
          ),
      }
    )} />
    <Stack.Screen name="onboarding3" component={Onboarding3} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
    </NavigationContainer>
   
   
  );
}