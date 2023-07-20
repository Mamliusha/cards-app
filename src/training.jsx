import React, { useState } from 'react';
import './training.css';


 export default function Train(props) {
    
    const [ButtonText, setButtonText] = useState('Показать перевод');

    const GetTranslation = () => {
        if (ButtonText === 'Показать перевод') {
          setButtonText(props.translation);
        } else {
          setButtonText('Показать перевод');
        }
      }   
    return(
        <div>
            <div className='Training-card'>
            <div className='word'>{props.value}</div>
            <button className='translation' onClick={()=>GetTranslation()} >{ButtonText}</button>
        </div>
        </div>
    )};

   
;
