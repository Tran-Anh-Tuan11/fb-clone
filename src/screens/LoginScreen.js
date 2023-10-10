import { View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { s } from 'react-native-wind'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import Logo from '../assets/images/logo.png.webp'
import MetaLogo from '../assets/images/meta-logo.webp'
const LoginScreen = () => {

        const[email, setEmail] =useState("");
        const [password, setPassword] =useState("")
    return (
        <SafeAreaView style={s`p-4 justify-center items-center`}> 
            <Button
                title="English (US)"
                type ="clear"
                titleStyle={s`text-black`}
                buttonStyle={s`mt-2`}
            />

            <Image
            source={Logo}
            style ={s`h-14 w-14 m-20`}
    
            />

            <TextInput
                placeholder ="Moblie number or email"
                autoFocus
                value={email}
                onChangeText ={setEmail}
                style={s` border border-gray-400 p-3 rounded-x1 w-11/12`}

            />
                
                
            <TextInput
                placeholder ="Password"
                secureTextEntry
                value={password}
                onChangeText ={setPassword}
                style={s` border border-gray-400 p-3 rounded-x1 w-11/12`}  
            />

            <View>
                < Button 
                    title="Login"
                    buttonStyle ={s`rounded-2x1 mt-4`}
                    
                />
                < Button 
                    title="Forgot Password?"
                    type ="clear"
                    buttonStyle ={s`mt-4`}
                    
                /> 
                < Button 
                    title="Create new account"
                    type ="outline"
                    buttonStyle ={s`rounded-2x1 mt-28`}
                    
                /> 
            </View>
        <Image
        source={MetaLogo}
        style={s`p-4 h-10 w-1/5 mt-2`}
        />
        </SafeAreaView>
    );
}
export default LoginScreen;