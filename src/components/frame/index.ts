

export const showFrame = () => {
  const modal = document.createElement('div')
  modal.innerHTML = `
    <div class='backdrop'>
      <div class='modal'>
        <span>Hello world</span>
      </div>
    </div>
  `

  document.body.appendChild(modal);
};