import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import More from './More';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                backgroundColor: 'black',
                activeTintColor: 'white',
                style: {
                    backgroundColor: '#1a1718',
                    borderTopColor: 'transparent',
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={24} color="white" />
                    ),
                }} />
            <Tab.Screen
                name="Mais"
                component={More}
                options={{
                    tabBarLabel: 'Mais',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-list" size={24} color="white" />
                    ),
                }} />
        </Tab.Navigator>
    );
}