import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
        throw new Error(e)
    }
  };

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value
    } catch (e) {
        throw new Error(e)
    }
  };

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
      throw new Error(e)
  }
};