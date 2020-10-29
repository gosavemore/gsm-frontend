import axios from 'axios'

const axiosRoute = () => {
  return axios.create({
    baseURL: 'https://gosavemore.herokuapp.com/' || 'http://localhost:5000/',
  })
}

export default axiosRoute
