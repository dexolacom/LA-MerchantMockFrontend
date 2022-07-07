import { frameStyles } from './styles';


export const showFrame = () => {
  if (document.getElementById('frame-modal')) {
    return
  }
  const modal = document.createElement('div')
  modal.innerHTML = `
    <div class='frame-modal' id='frame-modal'>
      <span>Sign in with liquid access</span>
      <button>Connect wallet</button>
    </div>
  `
  document.body.appendChild(modal);
  setStyles(frameStyles)
}

export const setStyles = (stylesObject: object) => {
  const range = document.createRange();
  let res = "";
  Object.entries(stylesObject).forEach(([key]) => {
    // @ts-ignore
    const obj = JSON.stringify(stylesObject[key], null, "\t")
      .replace(/"/g, "")
      .replace(/,\n/g, ";")
      .replace(/\}/g, ";}");
    res = `<style>.${key}${obj},</style>`;
  });
  const frag = range.createContextualFragment(res);
  // @ts-ignore
  document.querySelector("head").append(frag);
};