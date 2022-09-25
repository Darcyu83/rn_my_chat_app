import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';

const MyProfile = () => {
    const navState = useNavigationState((state) => state);

    useEffect(() => {
        console.log(
            'navState === ',
            navState.routes.map((route) => route.name),
        );
    }, [navState]);
    return (
        <View>
            <Text>MyProfile</Text>
        </View>
    );
};

export default MyProfile;
