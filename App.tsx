import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatStackParams, renderChatStackGroup } from './src/navigator/ChatStackNav';
import { AuthStackParams, renderAuthStackGroup } from './src/navigator/AuthStackNav';
import { renderUserStackGroup, UserStack } from './src/navigator/UserStackNav';

export const RootStack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackParamsList = AuthStackParams & ChatStackParams & UserStack;
const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: true }}>
                {renderChatStackGroup()}
                {renderAuthStackGroup()}
                {renderUserStackGroup()}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
