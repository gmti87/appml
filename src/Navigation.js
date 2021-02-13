import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import Home from './view/Home'
import Login from './view/Login'
import Signup from './view/Signup'
import RedefinePass from './view/RedefinePass'
import Index from './view/Index'

const optionsHeader = () => ({
    headerShown: {
        backgroundColor: "#ffe600",
    }
})

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.screen
                    name="Home"
                    component={Home}
                    options={optionsHeader}
                />
                <Stack.screen
                    name="Login"
                    component={Login}
                    options={optionsHeader}
                />
                <Stack.screen
                    name="Signup"
                    component={Signup}
                    options={optionsHeader}
                />
                <Stack.screen
                    name="RedefinePass"
                    component={RedefinePass}
                    options={optionsHeader}
                />
                <Stack.screen
                    name="Index"
                    component={Index}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}