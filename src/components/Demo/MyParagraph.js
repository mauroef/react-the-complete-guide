import React from 'react';
const MyParagraph = props => {
  console.log('RENDER MyParagraph');
  return <p>{props.children}</p>
};

export default MyParagraph;
// export default  React.memo(MyParagraph);