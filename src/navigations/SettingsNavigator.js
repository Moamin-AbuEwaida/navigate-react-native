import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Settings, SettingsDetail } from "../screens";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
