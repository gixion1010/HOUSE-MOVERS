import * as React from 'react';
import { Text, View,Button, StyleSheet,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HOME from './Home';
import RequiredOrderDetails from './RequiredOrderDetails';
import SetPickupLocation from './SetPickUpLocation';
import SetDestinationLocation from './SetDestinationLocation';
import SignOut from './SignOut';
export default function DrawerContainer(navigation) {
  const Drawer = createDrawerNavigator();
  const showHiddenScreen = false;
  return (
      <Drawer.Navigator useLegacyImplementation
        screenOptions={{ drawerPosition: 'left' }} initialRouteName="HOME">
        <Drawer.Screen name='HOME' component={HOME} options={{
          title:"Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Set Pickup Location' component={SetPickupLocation} options={{
          title:"Set Pickup Location",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Set Destination Location' component={SetDestinationLocation} options={{
          title:"Set Destination Location",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Required Order Details' component={RequiredOrderDetails} options={{
          title:"Item Details Required",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
         <Drawer.Screen name='Team SignOut' component={SignOut} options={{
          title:"Sign Out",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      </Drawer.Navigator>
  );
}
