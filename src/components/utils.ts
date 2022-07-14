import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

export const urlParams = `merchant=test&userId=1&subscriptionId=3`

const encryptParams = (str: string) => {
  const ciphertext = AES.encrypt(str, 'secretPassphrase');
  return encodeURIComponent(ciphertext.toString());
}

export const getUrl = (urlParams: string) => {
  const encryptedId = encryptParams(urlParams)
  // return `http://localhost:3001/_*${encryptedId}`;
  return `https://la-dashboard.vercel.app/_*${encryptedId}`;
}