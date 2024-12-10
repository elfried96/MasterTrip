import CryptoJS from 'crypto-js';

const api = import.meta.env.VITE_API_ENDPOINT + '/api/'
const decryptFuntion =  () =>{
  // // Déchiffrer les données
if(localStorage.getItem("encrypteduserdatacni")){
    const storedData = JSON.parse(localStorage.getItem("encrypteduserdatacni"));
    const decryptedId = CryptoJS.AES.decrypt(storedData.userId, import.meta.env.VITE_LOCAL_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    console.log(decryptedId)
    const decryptedToken = CryptoJS.AES.decrypt(storedData.token, import.meta.env.VITE_LOCAL_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return decryptedToken

}
return "assas"

}

const TokenValue = decryptFuntion()
export const register = async(name, email, full_name, password) => {

  let options
    options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        full_name: full_name,
        role: 0,
        password: password
      })
    }
  const result = await fetch(api + 'auth/register/', options)
  const data  = result.json()
    
  return data
}


export const login = async (email, password) => {
 
  let options

  options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }

  const result = await fetch(api + 'auth/login/', options)
  const data = await result.json()
 
  return data
}

export const loginauth = async(name, email, full_name, password) => {
 
  let options
    options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        full_name: full_name,
        role: 0,
        password: password
      })
    }
  const result = await fetch(api + 'auth02/', options)
  const data = await result.json()
  console.log(data)
 
  return data
}

export const logoutapi = async () => {


  let options
 
  options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + TokenValue
    },
  }

  const result = await fetch(api + 'auth/logout/', options)
  const data = await result.json()
  console.log(data)
    
  return data
}


