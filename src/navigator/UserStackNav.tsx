import React from 'react';
import MyProfile from '../screens/user/profile/MyProfile';
import FriendProfile from '../screens/user/profile/FriendProfile';
import { RootStack } from '../../App';

export type UserStack = {
    MyProfile: undefined;
    FriendProfile: undefined;
};

export const renderUserStackGroup = () => {
    return (
        <RootStack.Group>
            <RootStack.Screen name='MyProfile' component={MyProfile} />
            <RootStack.Screen name='FriendProfile' component={FriendProfile} />
        </RootStack.Group>
    );
};
