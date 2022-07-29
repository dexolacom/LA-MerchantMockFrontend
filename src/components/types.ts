export interface LoginProps {
  isUserLogged: boolean
  setIsUserLogged: (b: boolean) => void
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