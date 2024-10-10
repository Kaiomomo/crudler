import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';






const Stack = createNativeStackNavigator();


export const App=() =>{
  //inisitilation----- 
  //State-----
  //Handlers-----
  //View---------ß


<<<<<<< Updated upstream
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='ModuleListScreen'
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',
      }}
      >
      <Stack.Screen
      
      name='ModuleListScreen'
      component={ModuleListScreen}
      options={{title: 'List modules'}}
     />
       <Stack.Screen
      
      name='ModuleAddScreen'
      component={ModuleAddScreen}
      options={{title: 'Add module'}}
     />

<Stack.Screen
      
      name='ModuleViewScreen'
      component={ModuleViewScreen}
      options={{title: 'View module'}}
     />
      <Stack.Screen
      
      name='ModuleModifyScreen'
      component={ModuleModifyScreen}
      options={{title: 'Modify module'}}
     />



    </Stack.Navigator>
  </NavigationContainer>




  );
};

=======
export const App=() =>{
  return (
    <View style={styles.container}>
      <Text>Jennefier is gay </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> Stashed changes

export default App;
