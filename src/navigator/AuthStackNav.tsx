import React from 'react';
import AuthHome from '../screens/auth/AuthHome';
import LoginScrn from '../screens/auth/LoginScrn';
import PhoneAuthScrn from '../screens/auth/PhoneAuthScrn';
import { RootStack } from '../../App';

export type AuthStackParams = {
    AuthHome: undefined;
    LoginScrn: undefined;
    PhoneAuthScrn: undefined;
};

export const renderAuthStackGroup = () => {
    return (
        <RootStack.Group>
            <RootStack.Screen name='AuthHome' component={AuthHome} />
            <RootStack.Screen name='LoginScrn' component={LoginScrn} />
            <RootStack.Screen name='PhoneAuthScrn' component={PhoneAuthScrn} />
        </RootStack.Group>
    );
};
