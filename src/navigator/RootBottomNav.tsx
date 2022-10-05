import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomParamsList } from './types';
import { ChatStackNav } from './chatStackNav/ChatStackNav';
import { AuthStackNav } from './authStackNav/AuthStackNav';
import { UserStackNav } from './userStackNav/UserStackNav';
import { Text } from 'react-native';

const RootBottom = createBottomTabNavigator<RootBottomParamsList>();

export default function RootBottomNav() {
    return (
        <RootBottom.Navigator screenOptions={{ headerShown: false }}>
            <RootBottom.Screen name='TodosStackNav' component={() => <Text>ToDoStackNav</Text>} />
            <RootBottom.Screen name='ChatStackNav' component={ChatStackNav} />
            <RootBottom.Screen name='AuthStackNav' component={AuthStackNav} />
            <RootBottom.Screen name='UserStackNav' component={UserStackNav} />
        </RootBottom.Navigator>
    );
}
