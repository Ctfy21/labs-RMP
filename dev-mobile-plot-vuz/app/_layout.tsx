import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import GlobalProvider from '@/context/GlobalProvider'


import '../global.css'

const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='(auth)' options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
      </Stack>
    </GlobalProvider>
  )
}

export default RootLayout
