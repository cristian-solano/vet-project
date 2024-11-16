import axios from 'axios'

const getInLogin = async(data) => {
  const URL = `https://reqres.in/api/login`
  const req = await axios.post(URL, data)
  return req 
}

export default getInLogin