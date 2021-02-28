import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../formPages/login";
import ChoosePages from "../formPages/choosePages";
import StudentSignup from "../formPages/studentSignup";
import CompanySignup from "../formPages/companySignup"
const Stack = createStackNavigator();

export default function AuthNavigation() {
    return (
        
        <Stack.Navigator>
          <Stack.Screen name="Log In" component={Login} />
          <Stack.Screen name="Register" component={ChoosePages} />
          <Stack.Screen name="Student Registration" component={StudentSignup} />
          <Stack.Screen name="Industrial Sign Up" component={CompanySignup} />
        </Stack.Navigator>
          );
}