import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from "expo-constants";

export default function CompleteScreen() {
  return (
    <View style={styles.container}>
      <Text>Active Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  }
});