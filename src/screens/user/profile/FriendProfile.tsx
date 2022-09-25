import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';

const FriendProfile = () => {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);
    return (
        <View>
            <Text>FriendProfile</Text>
        </View>
    );
};

export default FriendProfile;
