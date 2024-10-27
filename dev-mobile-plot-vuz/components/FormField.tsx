import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setshowPassword] = useState(false)
  
    return (
    <View className={`space-y-2 ${otherStyles}`}> 
      <Text className='text-base font-medium'>{title}</Text>

      <View className='border-1 w-full
        h-16 px-4 bg-gray-100 rounded-2xl 
        items-center flex-row'>
        <TextInput className="flex-1  text-black
         font-semibold text-base" value={value}
         placeholder={placeholder}
         placeholderTextColor="#7b7b7b"
         onChangeText={handleChangeText}
         secureTextEntry={title === 'Password' && !showPassword}/>
         
        {title === 'Password' && 
        <TouchableOpacity onPress={() => 
        setshowPassword(!showPassword)}>
            <Ionicons name={!showPassword ? 'eye' : 'eye-off'}
             size={25}></Ionicons>
        </TouchableOpacity>
        }

      </View>
    </View>
  )
}

export default FormField