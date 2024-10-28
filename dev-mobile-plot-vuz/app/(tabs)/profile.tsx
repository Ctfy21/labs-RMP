import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import InfoBox from '@/components/InfoBox'
import { useGlobalContext } from '@/context/GlobalProvider';
import { signOut } from '@/scripts/api-config';
import { router } from 'expo-router';

const Profile = () => {

  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null)
    setIsLoggedIn(false)
    router.replace("/sign-in")
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center mt-14 px-4">
          <TouchableOpacity onPress={logout} className='w-full items-end mb-10'>
            <Ionicons name="exit-outline" color="red" size={30}></Ionicons>
          </TouchableOpacity>

          <View className='w-20 h-20 border border-black justify-center rounded-lg items-center'>
            {/* <Image source={{ uri: user?.avatar }} className='w-[90%] h-[90%]' resizeMode='cover'></Image> */}
          </View>

          <InfoBox title={user?.username} subtitle="" containerStyles="mt-5" titleStyles="text-lg"/>

          <View className="mt-5 flex flex-row">
              <InfoBox
                subtitle={user?.email}
                title="E-mail"
                containerStyles=""
                titleStyles="text-xl"
              />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Profile