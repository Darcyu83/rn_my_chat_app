import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TTodosStackParams } from './types';
import TodosHome from '../../screens/todos/TodosHome';

const TodosStack = createNativeStackNavigator<TTodosStackParams>();

export default function TodosStackNav() {
    return (
        <TodosStack.Navigator>
            <TodosStack.Screen name='TodosHome' component={TodosHome} />
        </TodosStack.Navigator>
    );
}
