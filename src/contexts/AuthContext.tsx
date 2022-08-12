import {createContext, useContext} from 'react';

export type AuthContext = {
  isAuth: boolean
  setIsAuth: (b: boolean) => void
}

export const AuthContext = createContext<AuthContext>({
  isAuth: false,
  setIsAuth: () => undefined
})

export const useAuthContext = () => useContext(AuthContext)
