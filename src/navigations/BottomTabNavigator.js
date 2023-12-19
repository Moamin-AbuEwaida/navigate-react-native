import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home, Wallet, Notifications, Settings } from "../screens";
import { ROUTES } from "../constants";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
