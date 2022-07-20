import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

const uid = () => Math.floor(Math.random() * 101)

export const urlParams = `merchant=MerchantOne&userId=${uid()}&subscriptionId=${uid()}`

const encryptParams = (str: string) => {
  const ciphertext = AES.encrypt(str, 'secretPassphrase');
  return encodeURIComponent(ciphertext.toString());
}

export const getUrl = (urlParams: string) => {
  const encryptedId = encryptParams(urlParams)
  // return `http://localhost:3001/_*${encryptedId}`;
  return `https://la-dashboard.vercel.app/_*${encryptedId}`;
}