import React, { useEffect, useState } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View,Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './Home';
import AddAlarme from './AddAlarme';

// import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function App() {

  
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          headerShown: false,
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: "#121212",
              borderTopColor: "transparent",
              height:65,
              paddingBottom: 5,
              paddingTop: 5
            },
            null
          ],
          tabBarActiveTintColor: "#fff",
          tabBarInactiveBackgroundColor: "#ff000"
        }

      }>
        <Tab.Screen name="Inicio" component={Home} options={{
          tabBarLabel: "", tabBarIcon: ({ color, size }) => (
            <View>
              {/* <Feather name="home" size={size} color={color} /> */}
            </View>),
        }} />
        <Tab.Screen name="Editar" component={Home} options={{
          tabBarLabel: "", tabBarIcon: ({ color, size }) => (
            <View>
              {/* <Feather name="tool" size={size} color={color} /> */}
              <Feather name="home" size={size} color={color} />
            </View>),
        }} />
        <Tab.Screen name=" " component={AddAlarme} options={{
          tabBarLabel: "", tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center", width: 70, height: 70, borderRadius: 50, backgroundColor: "#ffcc00", marginTop: -20 }}>
              <MaterialCommunityIcons name="bell-plus-outline" size={40} color="black" />
            </View>
          ),
        }} />
        <Tab.Screen name="Configuração" component={Home} options={{
          tabBarLabel: "", tabBarIcon: ({ color, size }) => (
            <View>
              <Octicons name="gear" size={size} color={color} />
            </View>),
        }} />
        <Tab.Screen name="+" component={Home} options={{
          tabBarLabel: "", tabBarIcon: ({ color, size }) => (
            <View>
               {/* <MaterialCommunityIcons name="face-man-profile" size={35} color={color} /> */}
            </View>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
