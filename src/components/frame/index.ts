import { frameStyles } from './styles';


// export const showFrame = () => {
//   // JSON.parse(localStorage.getItem('account') as string)
//   if (document.getElementById('frame-modal')) return
//   const modal = document.createElement('div')
//
//   const toggleHtml = () => {
//     // @ts-ignore
//     document.getElementById('frame-modal').style.display='none';
//     // @ts-ignore
//     document.getElementById('frame-modal-nft').style.display='block'
//   };
//
//   modal.innerHTML = `
//     <div class='frame-modal' id='frame-modal'>
//       <span class='frame-text'>Sign in with liquid access</span>
//       <div>
//         <button id='frame-button' class='frame-button'>Connect wallet</button>
//       </div>
//     </div>
//     <div class='frame-modal' id='frame-modal-nft' style='display: none'>
//       <div class='frame-text'>Your subscribe 1 NFT</div>
//       <div class='frame-text'>NFT merchant 1</div>
//       <button id='frame-button' class='frame-button'>Confirm</button>
//     </div>
//   `
//   document.body.appendChild(modal);
//   setStyles(frameStyles)
//
//   // @ts-ignore
//   document.getElementById('frame-button').addEventListener("click", () => toggleHtml(), {once: true});
//   // @ts-ignore
//   // document.getElementById('frame-button').removeAttribute("onclick");
//
//   // // @ts-ignore
//   // document.getElementById("frame-button").addEventListener("click", () => getWalletConnection());
//   // // @ts-ignore
//   // document.getElementById("frame-button").removeEventListener("click", () => getWalletConnection());
// }

export const showFrame = () => {
  // maybe add links with arguments?
  if (document.getElementById('la-frame')) return
  const frame = document.createElement('div')
  frame.innerHTML = `<div id="la-frame" class='la-frame'></div>`
  document.body.appendChild(frame)

  if (document.getElementById('la-frame')) {
    const link = document.createElement('link')
    const script = document.createElement('script')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', './frame/index.css')
    script.setAttribute('src', './frame/index.js')
    document.body.append(link, script)
  }
};

export const setStyles = (stylesObject: object) => {
  const range = document.createRange();
  let res = "";
  let arr: string[] = []
  Object.entries(stylesObject).forEach(([key]) => {
    // @ts-ignore
    const obj = JSON.stringify(stylesObject[key], null, "\t")
      .replace(/([A-Z])/g, "-$1").toLowerCase()
      .replace(/"/g, "")
      .replace(/,\n/g, ";")
      .replace(/\}/g, ";}");
    // @ts-ignore
    arr.push(`.${key}${obj}`)
  });

  res = `<style>${arr.join(' ')}</style>`;
  const frag = range.createContextualFragment(res);
  // @ts-ignore
  document.querySelector("head").append(frag);
};

const getWalletConnection = () => {
  // @ts-ignore
  if (window.ethereum) {
    // @ts-ignore
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      // @ts-ignore
      // .then((res) => accountChangeHandler(res[0]));
      .then((res) => {
        localStorage.setItem('accountAddress', JSON.stringify(res[0]))
      });
  } else {
    alert("install metamask extension!");
  }
};