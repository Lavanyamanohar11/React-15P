import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showAns, setShowAns] = useState(false);
  // const toggleAns = () => {
  //   setShowAns(showAns => !showAns)
  // }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowAns(!showAns)}>
          {showAns?<AiOutlineMinus/>: <AiOutlinePlus/>}
        </button>
      </header>
      {showAns && <p>{info}</p>}
    </article>
  )
};

export default Question;
