import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login/Login";
import Register from "./src/components/Register/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from "react-redux";
import store from "./src/store";
import reducer from "./src/store/reducer/index";
import HomeTab from "./src/components/Home/HomeTab";
import Courts from "./src/components/Courts/Courts";
//import User from "./src/components/User/User";

const navTheme = DefaultTheme;
navTheme.colors.background = "white";
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeTab" component={HomeTab} />
          <Stack.Screen name="Courts" component={Courts} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
