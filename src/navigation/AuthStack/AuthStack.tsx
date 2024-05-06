import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AuthRoutes } from "./routes";
import { Login } from "../../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={AuthRoutes.LOGIN} component={Login} />
    </Navigator>
  );
};

export default AuthStack;
