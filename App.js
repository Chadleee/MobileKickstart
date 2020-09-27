import React from 'react';
import { Keyboard, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from "./navigation";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaProvider>
                    <StatusBar backgroundColor="black" statusBarStyle={'light-content'}/>
                    <Navigation colorScheme={colorScheme}/>
                </SafeAreaProvider>
            </TouchableWithoutFeedback>
        );
    }
}
