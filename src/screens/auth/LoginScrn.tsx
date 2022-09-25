import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import NavMenu from '../../components/NavMenu';
import { useNavigationState } from '@react-navigation/native';

const LoginScrn = () => {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);

    useEffect(() => {
        console.log('LoginScrn created');
        return () => {
            console.log('LoginScrn destoryed');
        };
    }, []);

    return (
        <View>
            <Text>LoginScrn</Text>
            <Text>navState: {navState.routes.map((route) => route.name).toString()}</Text>
            <NavMenu />
        </View>
    );
};

export default LoginScrn;
