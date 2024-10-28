import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import InfoBox from '@/components/InfoBox'
import { useGlobalContext } from '@/context/GlobalProvider';
import { signOut } from '@/scripts/api-config';
import { router } from 'expo-router';
import { savePhoto } from '@/scripts/save-photo';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


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

          <View className='w-20 h-20 border bg-gray-300 border-black justify-center rounded-lg items-center'>
            <TouchableOpacity onPress={pickImage} className='w-full items-center justify-center'>
              <Image source={{ uri: image }} className='w-[90%] h-[90%] opacity-60' resizeMode='cover'></Image>
              <Ionicons className="absolute align-middle" name="camera" size={30}></Ionicons>
            </TouchableOpacity>
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