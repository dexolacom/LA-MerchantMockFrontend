import AES from 'crypto-js/aes';

const id = () => Math.floor(Math.random() * 1011)

const encryptParams = (str: string) => {
  return AES.encrypt(JSON.stringify({ str }), 'secret').toString();
}

export const getUrl = (activate?: string) => {
  let urlParams = `userId=${id()}&merchantId=1`

  const encryptedLink = encryptParams(urlParams)

  if (activate) {
    return `https://la-dashboard.vercel.app/_*${encryptedLink}&activate`;
  }

  return `https://la-dashboard.vercel.app/_*${encryptedLink}&mint`;
  // return `http://localhost:3001/_*${encryptedLink}&mint`;
}