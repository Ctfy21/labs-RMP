import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-100'>
      <Text className='text-3xl'>Test!</Text>
      <StatusBar style="auto"></StatusBar>
      <Link href="/sign-in" style={{ color: 'blue' }}>Go To sign-in</Link>
    </View>
  )
}
