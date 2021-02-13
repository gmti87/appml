import React from 'react';
import { TouchebleOpacity, TextInput,  View, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvilIcons, Feather } from '@expo/vector-icons';

import Main from '../Main'
import List from '../List'

const Stack = createStackNavigator()

import styles from './styles'

const SearchBarHeader = () => {
    return (
        <View style={styles.input_search}>
            <EvilIcons
                name="search"
                size={22}
                color="#CDCDCD"
                style={{ marginRight: 5 }}
            />
            <TextInput
                placeholder="Buscar no Mercado livre"
            />
        </View>
    );
};

const optionHeader = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#ffe600",
        elevation: 0,
    },
    headerTintColor: "#000",
    headerTitle: () => (<SearchBarHeader />),
    headerLeft: () => (
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.toggleDrawer()}
            title="Info"
        >
            <Feather name="align-left" size={24} color="black" />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => Alert.alert("Ops", "O Carrinho ainda está vazio")}
            title="Info"
        >
            <EvilIcons name="cart" size={24} color="#0D0D0D" />
        </TouchableOpacity>
    ),
    headerTitleContainerStyle: {
        flex: 1,
    },
});

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={Main}
                name="Main"
                options={optionsHeader}
            />
            <Stack.Screen
                component={List}
                name="List"
                options={optionHeader}
            />
        </Stack.Navigator>
    );
}