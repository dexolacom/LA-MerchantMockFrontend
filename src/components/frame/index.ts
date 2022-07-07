import { frameStyles } from './styles';


export const showFrame = () => {
  // if (document.getElementById('frame-modal')) {
  //   return
  // }
  const modal = document.createElement('div')
  modal.innerHTML = `
    <div class='frame-modal' id='frame-modal'>
      <span class='frame-text'>Sign in with liquid access</span>
      <button class='frame-button'>Connect wallet</button>
    </div>
  `
  document.body.appendChild(modal);
  setStyles(frameStyles)
}

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