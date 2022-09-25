import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { StackActions, useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../App';

const NavMenu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'dodgerblue',
            }}
        >
            <Text
                style={{
                    borderWidth: 3,
                    borderColor: 'tomato',
                    borderStyle: 'solid',
                    color: 'white',
                    fontSize: 30,
                    margin: 10,
                }}
                onPress={() => {
                    console.log('check nav routes stack and reset', navigation.getState());
                    navigation.reset({ routes: [{ name: 'ChatHome', params: undefined }] });
                }}
            >
                Reset Routes
            </Text>
            <Text style={{ color: 'blue', fontSize: 50, margin: 10 }}>--AuthNav</Text>

            <Text
                style={{
                    borderWidth: 3,
                    borderColor: 'tomato',
                    borderStyle: 'solid',
                    color: 'white',
                    fontSize: 30,
                    margin: 10,
                }}
                onPress={() => {
                    if (navigation.canGoBack()) navigation.dispatch(StackActions.pop(1));
                    navigation.navigate('LoginScrn');
                }}
            >
                Go to Login screen
            </Text>
            <Text
                style={{
                    borderWidth: 3,
                    borderColor: 'tomato',
                    borderStyle: 'solid',
                    color: 'red',
                    fontSize: 30,
                    margin: 10,
                }}
                onPress={() => {
                    navigation.dispatch(StackActions.pop(1));
                    navigation.navigate('PhoneAuthScrn');
                }}
            >
                Go to Phone Auth screen
            </Text>

            <Text style={{ color: 'blue', fontSize: 50, margin: 10 }}>--ChatNav</Text>

            <Text
                style={{
                    borderWidth: 3,
                    borderColor: 'tomato',
                    borderStyle: 'solid',
                    color: 'yellow',
                    fontSize: 30,
                    margin: 10,
                }}
                onPress={() => {
                    navigation.dispatch(StackActions.pop(1));
                    navigation.navigate('ChatHome');
                }}
            >
                Go to ChatHome
            </Text>
            <Text
                style={{
                    borderWidth: 3,
                    borderColor: 'tomato',
                    borderStyle: 'solid',
                    color: 'white',
                    fontSize: 30,
                    margin: 10,
                }}
                onPress={() => {
                    navigation.dispatch(StackActions.pop(1));
                    navigation.navigate('ChatList');
                }}
            >
                Go to ChatList
            </Text>
            <Text
                style={{
                    borderWidth: 3,
                    borderColor: 'tomato',
                    borderStyle: 'solid',
                    color: 'lightgreen',
                    fontSize: 30,
                    margin: 10,
                }}
                onPress={() => {
                    navigation.dispatch(StackActions.pop(1));
                    navigation.navigate('ChatRoom');
                }}
            >
                Go to ChatRoom
            </Text>
        </View>
    );
};

export default NavMenu;
