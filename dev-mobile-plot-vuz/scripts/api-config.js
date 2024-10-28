const signUpURL = "http://192.168.3.82:8000/auth/sign-up"
const signInURL = "http://192.168.3.82:8000/auth/sign-in"
const key_local_storage_token = "jwt_token"

import { storeData, getData } from '@/scripts/local-storage'

export const createUser = async (email, password, username) => {
    try{
        let account = {
            username: username,
            email: email,
            password: password
        }

        fetch(signUpURL, {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
          })
          .then((response) => response.json())
          .then((user) => {
            alert(user.id)
            signIn(username, password)
          })
    }
    catch(error){
        console.log(error)
        throw new Error(error)
    }
}

export const signIn = async (username, password) => {
    let sign_in_account = {
        username: username,
        password: password
    }
    try{
      const response = await fetch(signInURL, {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sign_in_account)
        })
      const json = await response.json()
      console.log(json)
      if(response.status == 200){
        await storeData(key_local_storage_token, json.token)
      }
      return [json.token, response.status]
    }
    catch(error){
      console.log(error)
      throw new Error(error)
    }
}

export const getCurrentUser = async () => {
  const current_account_token = await getData(key_local_storage_token)

  if(current_account_token == null) throw Error;

  const response = await fetch(signInURL, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${current_account_token}`
    },
    body: ""
  })
  const json = await response.json()
  console.log(json)
  if(response.status != 200) throw Error;

  return json.id
}

