export interface LoginProps {
  isAuth: boolean
  setIsAuth: (b: boolean) => void
}

export interface CardProps {
  title: string
  text: string
  price: string
}

export interface PlanCardProps {
  card: {
    NFT_id: number
    package: string
    expiration: number
    is_activated_NFT: boolean
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