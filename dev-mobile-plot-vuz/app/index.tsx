import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider'

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn){
    return <Redirect href="/home"/>
  } 

  return (
    <View className='flex-1 items-center justify-center bg-gray-100'>
      <Text className='text-3xl'>Test!</Text>
      <StatusBar style="auto"></StatusBar>
      <Link href="/sign-in" style={{ color: 'blue' }}>Go To sign-in</Link>
    </View>
  )
}
