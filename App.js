import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/navigations/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text>Text</Text>
        </View>
      </SafeAreaView> */}
      <AuthNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
