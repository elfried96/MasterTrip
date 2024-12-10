import CryptoJS from 'crypto-js';

const api =  'http://localhost:8000' + '/api/enrollement/'

const decryptFuntion =  () =>{
    // // Déchiffrer les données
  if(localStorage.getItem("encrypteduserdatacni")){
      const storedData = JSON.parse(localStorage.getItem("encrypteduserdatacni"));
      const decryptedId = CryptoJS.AES.decrypt(storedData.userId, import.meta.env.VITE_LOCAL_SECRET_KEY).toString(CryptoJS.enc.Utf8);
      console.log(decryptedId)
      const decryptedToken = CryptoJS.AES.decrypt(storedData.token, import.meta.env.VITE_LOCAL_SECRET_KEY).toString(CryptoJS.enc.Utf8);
      return decryptedToken

  }
  return 0
 
}

const TokenValue = decryptFuntion()

export const allenrollement = async () => {
   
    const options = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('api', options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}

export const oneerollement = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}


export const createenrollement = async (userId, date,courseId, completionStatus) =>{

    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            userId: userId,
            courseId: courseId,
            enrollementDate:date,
            completionStatus: completionStatus
        })
    }
    const result = await fetch(api, options)
    const data   = result.json()
    return data
}


export const updateenrollement = async (userId, courseId, completionStatus) => {

    const options = {
        method: 'PUT',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            userId: userId,
            courseId: courseId,
            completionStatus: completionStatus
        })
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}



export const removeenrollement = async (id) => {

    const options = {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json',
            'Authorization':'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result 
}