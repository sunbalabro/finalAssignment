// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./stackNavigation";
import BottomTabNavigator from "./tabNavigation";
import AllCompanies from "./AllCompanies";
import AllStudents from "./AllStudents";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="All Students" component={AllStudents} />
      <Drawer.Screen name="All Companies" component={AllCompanies} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;