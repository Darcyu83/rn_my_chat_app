import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import NavMenu from '../../components/NavMenu';

function AuthHome({}) {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);

    useEffect(() => {
        console.log('AuthHome created');
        return () => {
            console.log('AuthHome destoryed');
        };
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'dodgerblue' }}>
            <NavMenu />
        </SafeAreaView>
    );
}

export default AuthHome;
