import React from 'react';
import { RootStack } from '../../App';
import ChatHome from '../screens/chat/ChatHome';
import ChatList from '../screens/chat/ChatList';
import ChatRoom from '../screens/chat/ChatRoom';

export type ChatStackParams = {
    ChatHome: undefined;
    ChatList: undefined;
    ChatRoom: undefined;
};

export const renderChatStackGroup = () => {
    return (
        <RootStack.Group>
            <RootStack.Screen name='ChatHome' component={ChatHome} />
            <RootStack.Screen name='ChatList' component={ChatList} />
            <RootStack.Screen name='ChatRoom' component={ChatRoom} />
        </RootStack.Group>
    );
};
