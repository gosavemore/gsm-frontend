import axios from 'axios'

const axiosRoute = () => {
  return axios.create({
    baseURL: 'http://localhost:5000/' || 'https://gosavemore.herokuapp.com/',
  })
}

export default axiosRoute
