import { View, Text, ScrollView, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/scripts/api-config'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })  

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error', 'Please fill all fields!')
    }

    setIsSubmitting(true)

    try {
      const result = await createUser(form.email, form.password, form.username)

      router.replace("/home")
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-gray-50 h-full">
        <ScrollView>
          <View className='w-full justify-center px-4 my-6 min-h-[88vh]'>
          <Ionicons name='home' size={45} />

          <Text className='text-2xl text-black mt-10 font-semibold'>Sign Up</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}
            otherStyles="mt-7" placeholder={undefined}/>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" placeholder={undefined}/>

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7" placeholder={undefined}/>
          
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting} textStyles={undefined}/>

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-black font-normal'>Do you have an account?

            </Text>
            <Link href="/sign-in" className='text-lg font-semibold color-orange-500'>Sign In</Link>
          </View>

          </View> 
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp