import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Ionicons name={icon} color={color} size={20}></Ionicons>
      <Text className={`${focused ? 'font-semibold' : 'font-regular'} text-xs`}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false
      }}>
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon="home" color={color} name="Home" focused={focused}/>
            )
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon="add-circle-outline" color={color} name="Create" focused={focused}/>
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout