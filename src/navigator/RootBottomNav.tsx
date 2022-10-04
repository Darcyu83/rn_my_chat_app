import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomParamsList } from './types';
import { ChatStackNav } from './ChatStackNav/ChatStackNav';
import { AuthStackNav } from './AuthStackNav/AuthStackNav';
import { UserStackNav } from './UserStackNav/UserStackNav';

const RootBottom = createBottomTabNavigator<RootBottomParamsList>();

export default function RootBottomNav() {
    return (
        <RootBottom.Navigator screenOptions={{ headerShown: false }}>
            <RootBottom.Screen name='ChatStackNav' component={ChatStackNav} />
            <RootBottom.Screen name='AuthStackNav' component={AuthStackNav} />
            <RootBottom.Screen name='UserStackNav' component={UserStackNav} />
        </RootBottom.Navigator>
    );
}
