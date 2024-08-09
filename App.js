import global from '@/css/global';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import Navbar from '@/components/Navbar';

import macbook from '@/assets/image/macbook.jpeg';

export default function App() {
  return (
    <SafeAreaView style={global.droidSafeArea}>
      <StylingReactNativeComponent />
    </SafeAreaView>
  );
}

const StylingReactNativeComponent = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Styling React Native</Text>
      <View 
        style={{ 
          padding: 12, 
          backgroundColor: '#f2f2f2', 
          width: 212, 
          borderRadius: 8 
        }}
      >
        <Image 
          source={macbook} 
          style={{ 
            width: 180, 
            height: 100, 
            borderRadius: 8 
          }} 
        />
        <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 16 }}>New Macbook Pro 2021</Text>
        <Text style={{ fontWeight: 'bold', color: '#00b894',fontSize: 14, marginTop: 12 }}>Rp 25.000.000</Text>
        <Text style={{ fontWeight: 'semibold', fontSize: 14, marginTop: 12 }}>Jakarta Barat</Text>
        <View style={{ marginTop: 14, backgroundColor: '#00b894', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Beli Sekarang!</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})