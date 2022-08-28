import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../../App';
import NavMenu from '../../components/NavMenu';

const ChatHome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>ChatHome</Text>
            <NavMenu />
        </SafeAreaView>
    );
};

export default ChatHome;
