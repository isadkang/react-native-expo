import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import Navbar from '@/components/Navbar';

const SampleComponent = () => {
    return (
        <View>
            <View style={{ width: 80, height: 80, backgroundColor: '#0984e3' }}></View>
            <Text>Irsyad</Text>
            <Text>Alya</Text>
            <Photo />
            <TextInput placeholder="Ketikan sesuatu..." style={{ borderWidth: 1, padding: 10, marginTop: 10, marginBottom: 10 }} />
            <BoxGreen />
            <Profile />
        </View>
    )
}

const Photo = () => {
    return <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 80, height: 80 }} />
}

class BoxGreen extends React.Component {
    render() {
        return (
            <View style={{ width: 80, height: 80, backgroundColor: '#00b894' }}></View>
        )
    }
}

class Profile extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ marginTop: 10, fontSize: 25, color: '#0984e3', fontWeight: 'bold' }}>Ini Profile dari Class Component</Text>
            </View>
        )
    }
}