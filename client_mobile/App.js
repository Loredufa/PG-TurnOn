import React, { useContext, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login/Login";
import Register from "./src/components/Register/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./src/store";
import reducer from "./src/store/reducer/index";
import HomeTab from "./src/components/Home/HomeTab";
import User from "./src/components/User/User";
import Home from "./src/components/Home/Home";
import Landing from "./src/components/Landing/Landing";
import { Dimensions } from "react-native";
import Phone from "./src/components/Phone/Phone";
import { getAllSuppliers } from "./src/store/actions/index";

// EACH TIME A NAVIGATION OCCURS A THE NEW SCREEN WILL BE PUSHED
// ON TOP OF A STACKNAVIGATOR. EACH BACK ACTION REMOVES THE SCREEN
// FROM THE STACKNAVIGATOR
const RootNavigationStack = createStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = "white";

const RootStackScreen = () => {
  const { authToken } = useSelector((state) => state);
  return (
    <RootNavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!authToken ? (
        <>
          <RootNavigationStack.Screen name="Login" component={Login} />
          <RootNavigationStack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <RootNavigationStack.Screen name="Landing" component={Landing} />
          <RootNavigationStack.Screen name="Phone" component={Phone} />
          <RootNavigationStack.Screen name="HomeTab" component={HomeTab} />
        </>
      )}
    </RootNavigationStack.Navigator>
  );
};

// A NAVIGATIONCONTAINER CAN ONLY CONTAIN ONE ROOT NAVIGATIONSTACK
// IF YOUR APP HAS MULTIPLE NAVIGATION STACKS,
// THOSE NAVIGATIONSTACKS WOULD BE GROUPED AS SCREENS INSIDE
// YOUR ROOT NAVIGATIONSTACK
const NavigationContainerStack = () => (
  <NavigationContainer theme={navTheme}>
    <RootStackScreen />
  </NavigationContainer>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainerStack />
    </Provider>
  );
}

//export default NavigationContainerStack;

/*
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
          {/*<Stack.Screen name="Courts" component={Courts} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
*/

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
