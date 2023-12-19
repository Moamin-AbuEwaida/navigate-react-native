import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login, ForgetPassword, Register } from "../screens";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      {/* <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgetPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
