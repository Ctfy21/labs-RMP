const signUpURL = "http://192.168.3.82:8000/auth/sign-up"
const signInURL = "http://192.168.3.82:8000/auth/sign-in"

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

export async function signIn(username, password){
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
      return [json.token, response.status]
    }
    catch(error){
      console.log(error)
      throw new Error(error)
    }
}

