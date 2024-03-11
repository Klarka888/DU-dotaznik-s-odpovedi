import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

export const Question = ({text}) => {
  const [iconType, setIconType] = useState('symbolQuestion') 
  const [answer, setAnswer] = useState('symbolQuestion') //1. přepis z answered na answer + default je 'symbolQuestion'
  const [vote, setVote] = useState('')

  const handleOnClickType = (type, text) => {     
    setIconType(type)
    console.log(text)     
    setAnswer(iconType)  
    setVote(text)   
  }

  return (
    <div className="question">
      <QuestionBody 
        iconType={iconType} 
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onClickType={handleOnClickType} />  
        <Option type="smileyYes" text="Spíše souhlasím" onClickType={handleOnClickType} />
        <Option type="smileyNeutral" text="Nevím" onClickType={handleOnClickType} />
        <Option type="smileyNo" text="Spíše nesouhlasím" onClickType={handleOnClickType} />
        <Option type="smileyStrongNo" text="Nesouhlasím" onClickType={handleOnClickType} />
      </div>

      <h1>{vote}</h1>
    </div>
  );
};
