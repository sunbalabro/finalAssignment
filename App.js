import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/mainNavigation"
import DrawerNavigator from "./navigation/drawerNavigation";
import Login from "./formPages/login"
import ChoosePages from "./formPages/choosePages"
const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator/> */}
      {/* <Login/> */}
      {/* <ChoosePages/> */}
      <MainNavigation/>

    </NavigationContainer>
  );
};
export default App;