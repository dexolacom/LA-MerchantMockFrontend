
const id = () => Math.floor(Math.random() * 1011)

const cryptUrlParams = (key: string, text: string) => {
  const textToChars = (text: string) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
  const applyKeyToChar = (code: any) => textToChars(key).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applyKeyToChar)
    .map(byteHex)
    .join("");
};

export const getUrl = (activate?: string) => {
  let urlParams = `userId=${id()}&merchantId=1`

  const encryptedLink = cryptUrlParams('95416a2f-71cf-43be-9fba-20bce2ca0391', urlParams)

  if (activate) {
    return `https://la-dashboard.vercel.app/_*${encryptedLink}&activate`;
  }

  return `https://la-dashboard.vercel.app/_*${encryptedLink}&mint`;
  // return `http://localhost:3000/_*${encryptedLink}&mint`;
}