// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./stackNavigation";
import AllCompanies from "./AllCompanies"
import AdminSignup from "../formPages/AdminRegistration"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="AllCompanies" component={AllCompanies} />
      <Tab.Screen name="Admin" component={AdminSignup} />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;