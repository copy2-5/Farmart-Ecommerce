import React from "react";

interface EnsureBoxProps {
  title: string;
  review: string;
}

debugger;
export const EnsureBox : React.FC<EnsureBoxProps> = ({title, review}) => {
  return (
    <div className='app-ensure-process__box'>
      <div className='app-ensure-process__box-logo'></div>
      <div className='app-ensure-process__box-review'>
        <h4>{title}</h4>
        <p>{review}</p>
      </div>
    </div>
  );
}