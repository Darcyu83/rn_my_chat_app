import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ChatHome from '../../screens/chat/ChatHome';
import ChatList from '../../screens/chat/ChatList';
import ChatRoom from '../../screens/chat/ChatRoom';
import { ChatStackParams } from './types';

const ChatStack = createNativeStackNavigator<ChatStackParams>();

export const ChatStackNav = () => {
    return (
        <ChatStack.Navigator>
            <ChatStack.Screen name='ChatHome' component={ChatHome} />
            <ChatStack.Screen name='ChatList' component={ChatList} />
            <ChatStack.Screen name='ChatRoom' component={ChatRoom} />
        </ChatStack.Navigator>
    );
};
