import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require("./assets/main.jpg")}
          style={styles.bimage}
        />
        
          <Text style={styles.title}>Cryptoshow</Text>
          <Text style={styles.subtitle}>To The Moon</Text>
          <ScrollView style={styles.scroll}>
          <FlatList
            data={[
              { key: "Bitcoin" },
              { key: "Ethereum " },
              { key: "Tether " },
              { key: "Cardano" },
              { key: "XRP" }
            ]}
            renderItem={({ item }) => (
              <Button 
              style={styles.button} 
              title={item.key}
              onPress={console.log("ad")}></Button>
            )}
          />
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAAA",
    alignItems: "center",
    justifyContent: "center",
  },

  mainContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },

  bimage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    opacity: 0.47,
  },

  button: {
    elevation: 8,
    color: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  titles: {
    marginTop: 90,
    width: "100%",
    height: "100%"
  },

  title: {
    fontSize: 40,
    fontWeight: "400",
    color: "#00ffff",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#00ffff",
  },
});
