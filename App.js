import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import CompleteScreen from "./CompleteScreen";
import AllScreen from "./AllScreen";
import ActiveScreen from "./ActiveScreen";

const routeIcons = {
  Complete: "message1",
  All: "contacts",
  Active: "team",
};

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name={routeIcons[route.name]}
                size={24}
                color={focused ? "blue" : "grey"}
              />
            ),
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "grey",
          }}
        >
          <Tab.Screen name="Complete" component={CompleteScreen} />
          <Tab.Screen name="All" component={AllScreen} />
          <Tab.Screen name="Active" component={ActiveScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
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
