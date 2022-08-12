import axios from 'axios';


const baseUrl = 'https://liqiudaccess-merchant-backend.herokuapp.com'

export const addNewUser = (userData: object, setIsModalOpen: (b: boolean) => void) => {
  return axios.post(`${baseUrl}/aloha/la/user/add`, {...userData})
    .then(response => response.data && setIsModalOpen(false))
    .catch((error) => console.error(error))
};

export const authUser = (userData: {login: string, password: string}, setIsModalOpen: (b: boolean) => void, setIsAuth: (b: boolean) => void) => {
  // @ts-ignore
    return axios.get(`${baseUrl}/aloha/la/user/login/?login=${userData?.login}&password=${userData?.password}`)
  .then(response => {
    if (response?.data) {
      setIsAuth(true)
      setIsModalOpen(false)

      const localUserData = {
        userId: response?.data?.user_id,
        login: response?.data?.login,
      }

      localStorage.setItem('localUserData', JSON.stringify(localUserData))
    }
  }
  )
  .catch((error) => console.error(error))
};