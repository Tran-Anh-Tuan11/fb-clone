import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React  from 'react';
import LoginScreen from './src/screens/LoginScreen';

const App =() => {
    return(
        <View>
            <StatusBar style={"auto"} />
            <LoginScreen/>
        </View>
    );
}

export default App;