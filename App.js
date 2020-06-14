import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

//redux
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";

//Navigation
import AppNavigation from "./src/navigation";

//Paper
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  //Tous les composants dans stack recevra navigation en tant que props
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </PaperProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
