import CryptoJS from 'crypto-js';

const api = import.meta.env.VITE_API_ENDPOINT + '/api/course/'

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

const decryptID =  () =>{
    // // Déchiffrer les données
  if(localStorage.getItem("encrypteduserdatacni")){
      const storedData = JSON.parse(localStorage.getItem("encrypteduserdatacni"));
      const decryptedId = CryptoJS.AES.decrypt(storedData.userId, import.meta.env.VITE_LOCAL_SECRET_KEY).toString(CryptoJS.enc.Utf8);
      return decryptedId

  }
  return 0
 
}

const TokenValue = decryptFuntion()
export const allcourses = async () => {
   
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api, options)
    const data = await result.json()



    return data
}
    


export const getstudentcourse = async () => {
    const id = decryptID()

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch("http://127.0.0.1:8000/api/studentcourses/enroll/" + id + "/", options)
    const data = await result.json()

    return data
}

export const createcourse = async (course_name, description, price, userId, categories, imageCourse) => {

 
    let uplaoddata = new FormData()
    console.log(course_name, description, price, categories, imageCourse, userId)
 
    uplaoddata.append("imageCourse", imageCourse)

    uplaoddata.append("course_name", course_name)
    uplaoddata.append("description", description)
    uplaoddata.append("price", price)
    uplaoddata.append("categories", categories)
    uplaoddata.append("userId", userId)
    uplaoddata.append("duration", "12 semaine")


    const options = {
        method: 'POST',
        body:uplaoddata

    }
    const result = await fetch(api, options)
    const data = await result.json()
 
    return data
}



export const updatecourse = async (id, course_name, description, price, categories, imageCourse, userId) => {

    let uplaoddata = new FormData()
    console.log(course_name, description, price, categories, imageCourse, userId)
 
    uplaoddata.append("course_name", course_name)
    uplaoddata.append("description", description)
    uplaoddata.append("price", price)
    uplaoddata.append("categories", categories)
    uplaoddata.append("userId", userId)
    uplaoddata.append("duration", "12 semaine")

   
    if(typeof imageCourse != 'string'){
        uplaoddata.append("imageCourse", imageCourse)

    }
    const options = {
        method: 'PATCH',
        body:uplaoddata

    }
    const result = await fetch(api + id + "/", options)
    const data = await result.json()
    return data
}


export const removecourse = async (id) => {
    const options = {
        method: 'DELETE',
        header: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}