import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import configureStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import OrderCompleted from "./screens/OrderCompleted";

const Stack = createStackNavigator();

// important redux initialisation
const store = configureStore();

function MyStack({ screenOptions }) {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <MyStack screenOptions={screenOptions} />
      </NavigationContainer>
    </ReduxProvider>
  );
}
