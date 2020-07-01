import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { PersonasAvatar } from "react-native-personas-avatar";

export default function App() {
  const avatar = useRef<any>();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PersonasAvatar ref={avatar} style={{ width: 200, height: 200 }} />
      <TouchableOpacity
        style={styles.randomizeButton}
        onPress={() => avatar.current.randomize()}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Randomize</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  randomizeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "gray",
    borderRadius: 5,
  },
});
