import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login, ForgotPassword, Register } from "../screens";
import { COLORS, ROUTES } from "../constants";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },

          title: route.params.userId,
        })}
      />
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
