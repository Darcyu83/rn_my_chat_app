import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import NavMenu from '../../components/NavMenu';
import { useNavigationState } from '@react-navigation/native';

const ChatRoom = () => {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);

    useEffect(() => {
        console.log('ChatRoom created');
        return () => {
            console.log('ChatRoom destoryed');
        };
    }, []);

    return (
        <View>
            <NavMenu />
        </View>
    );
};

export default ChatRoom;
