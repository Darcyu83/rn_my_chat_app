import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootBottomNav from './src/navigator/RootBottomNav';

const App = () => {
    return (
        <NavigationContainer>
            <RootBottomNav />
        </NavigationContainer>
    );
};

export default App;
