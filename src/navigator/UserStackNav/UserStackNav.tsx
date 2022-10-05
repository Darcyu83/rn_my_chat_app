import React from 'react';
import MyProfile from '../../screens/user/profile/MyProfile';
import FriendProfile from '../../screens/user/profile/FriendProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TUserStackParams } from './types';

const UserStack = createNativeStackNavigator<TUserStackParams>();

export const UserStackNav = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name='MyProfile' component={MyProfile} />
            <UserStack.Screen name='FriendProfile' component={FriendProfile} />
        </UserStack.Navigator>
    );
};
