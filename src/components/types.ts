export interface LoginProps {
  isAuth: boolean
  setIsAuth: (b: boolean) => void
}

export interface CardProps {
  title: string
  text: string
  price: string
  setIsSubPurchased: (b: boolean) => void
}

export interface NftCardProps {
  card: {
    id: number
    type: string
  }
}

export interface BackdropProps {
  children: JSX.Element[] | JSX.Element,
  setIsModalOpen: (b: boolean) => void
}

export interface ModalProps {
  setIsModalOpen: (b: boolean) => void
  isLogin: boolean
}