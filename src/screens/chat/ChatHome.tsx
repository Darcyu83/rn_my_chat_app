import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../../App';
import NavMenu from '../../components/NavMenu';

const ChatHome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const [isLoading, setIsLoading] = useState(false);

    const promiseFunc = (num: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('num----', num % 2);
                if (num % 2) {
                    resolve('ok');
                } else {
                    reject('ng');
                }
            }, 3000);
        });
    };

    const asyncFunc = async (num: number) => {
        setIsLoading(true);
        const result = await promiseFunc(num).catch((e) => e);

        console.log('result----', result);
        if (result === 'ok') {
            setIsLoading(false);
        } else {
        }
    };

    const ref = useRef(0);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>ChatHome</Text>
            <Text
                onPress={async () => {
                    ref.current += 1;
                    await asyncFunc(ref.current);
                }}
                style={{ width: '100%', height: 80, backgroundColor: 'tomato' }}
            >
                Check state changed
            </Text>
            {isLoading && <ActivityIndicator size={'large'} />}
            <NavMenu />
        </SafeAreaView>
    );
};

export default ChatHome;
