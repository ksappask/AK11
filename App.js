import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./Screens/StackNavigator";
import store from "./store";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
});
