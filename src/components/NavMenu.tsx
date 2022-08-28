import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
            <Text style={{ color: 'blue', fontSize: 50, margin: 10 }}>--AuthNav</Text>

            <Text
                style={{ color: 'white', fontSize: 30, margin: 10 }}
                onPress={() => navigation.navigate('LoginScrn')}
            >
                Go to Login screen
            </Text>
            <Text
                style={{ color: 'red', fontSize: 30, margin: 10 }}
                onPress={() => navigation.navigate('PhoneAuthScrn')}
            >
                Go to Phone Auth screen
            </Text>

            <Text style={{ color: 'blue', fontSize: 50, margin: 10 }}>--ChatNav</Text>

            <Text
                style={{ color: 'yellow', fontSize: 30, margin: 10 }}
                onPress={() => navigation.navigate('ChatHome')}
            >
                Go to ChatHome
            </Text>
            <Text
                style={{ color: 'white', fontSize: 30, margin: 10 }}
                onPress={() => navigation.navigate('ChatList')}
            >
                Go to ChatList
            </Text>
            <Text
                style={{ color: 'lightgreen', fontSize: 30, margin: 10 }}
                onPress={() => navigation.navigate('ChatRoom')}
            >
                Go to ChatRoom
            </Text>
        </View>
    );
};

export default NavMenu;
