import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthHome from '../../screens/auth/AuthHome';
import LoginScrn from '../../screens/auth/LoginScrn';
import PhoneAuthScrn from '../../screens/auth/PhoneAuthScrn';
import { AuthStackParams } from './types';

const AuthStack = createNativeStackNavigator<AuthStackParams>();
export const AuthStackNav = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='AuthHome' component={AuthHome} />
            <AuthStack.Screen name='LoginScrn' component={LoginScrn} />
            <AuthStack.Screen name='PhoneAuthScrn' component={PhoneAuthScrn} />
        </AuthStack.Navigator>
    );
};
