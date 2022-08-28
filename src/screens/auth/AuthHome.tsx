import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import NavMenu from '../../components/NavMenu';

function AuthHome() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'dodgerblue' }}>
            <NavMenu />
        </SafeAreaView>
    );
}

export default AuthHome;
