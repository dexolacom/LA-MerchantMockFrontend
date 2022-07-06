

export const showFrame = () => {
  const root = document.getElementById('root')
  const modalElement = `
    <div class='backdrop'>
      <div class='modal'>
        <span>Hello world</span>
      </div>
    </div>
  `
  console.log(root);

  // return `
  //   <div class='backdrop'>
  //     <div class='modal'>
  //       <span>Hello world</span>
  //     </div>
  //   </div>
  // `
};