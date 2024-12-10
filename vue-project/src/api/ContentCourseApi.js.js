import CryptoJS from 'crypto-js';

const api = import.meta.env.VITE_API_ENDPOINT + '/api/coursecontent/'

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

export const allcontent = async () => {

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api, options)
    const data = result.json()
    return data
}

export const CourseContentOne = async (courseId) => {

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + courseId, options)
    const data = result.json()
    return data
   
}





export const createcontent = async (courseId, title,content, video, image) => {
  
    let uplaoddata = new FormData()
    uplaoddata.append("image", image)
    uplaoddata.append("courseId", courseId)
    uplaoddata.append("content", content)
    uplaoddata.append("title", title)
    uplaoddata.append("video", video)

    console.log("le formadata",uplaoddata)
    const options = {
        method: 'POST',
        body:uplaoddata

    }
    const result = await fetch(api, options)
    if (result.status == 401) {
        return false
    }
    const data = await result.json()

    return data
}



export const updatecontent = async (course_name, description, price, categories,id) => {

    const options = {
        method: 'PUT',
        header: {
            'content-type': 'application/json',
            'Autorization':'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            course_name: course_name,
            description: description,
            price: price,
            categories: categories
        })
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}


export const removeContent = async (id) => {
    const options = {
        method: 'DELETE',
        header: {
            'content-type': 'application/json',
            'Authorization':'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}