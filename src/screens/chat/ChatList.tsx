import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import NavMenu from '../../components/NavMenu';
import { useNavigationState } from '@react-navigation/native';

const ChatList = () => {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);

    useEffect(() => {
        console.log('ChatList created');
        return () => {
            console.log('ChatList destoryed');
        };
    }, []);

    return <View></View>;
};

export default ChatList;
