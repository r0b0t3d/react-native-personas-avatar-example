import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {PersonasAvatar} from 'react-native-personas-avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PersonasAvatar style={{ width: 200, height: 200 }} />
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
