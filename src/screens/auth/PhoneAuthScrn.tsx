import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import NavMenu from '../../components/NavMenu';
import { useNavigationState } from '@react-navigation/native';

const PhoneAuthScrn = () => {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);

    useEffect(() => {
        console.log('PhoneAuthScrn created');
        return () => {
            console.log('PhoneAuthScrn destoryed');
        };
    }, []);

    return <View></View>;
};

export default PhoneAuthScrn;
