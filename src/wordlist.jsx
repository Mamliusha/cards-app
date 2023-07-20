import React, { useState } from 'react';
import Train from './training';
import './wordlist.css';


function WordList() {

  const [json, SetJson] = useState( {
    "words": [
      {
        "id": 1,
        "word": "apple",
        "translation": "яблоко",
        "editable":false
      },
      {
        "id": 2,
        "word": "cat",
        "translation": "кошка",
        "editable":false
      },
      {
        "id": 3,
        "word": "house",
        "translation": "дом",
        "editable":false
      }
    ]
  }
)  
const updatedWords = [...json.words];

  function SaveIt(index){
    updatedWords[index].editable = false;
    SetJson({words:updatedWords})
  }    
  


  function EditIt (index) {
    updatedWords[index].editable = !updatedWords[index].editable;
    SetJson({words:updatedWords}); 
  }

  function DeleteIt(index){
    updatedWords[index].word = '';
    updatedWords[index].translation = '';
    SetJson({words:updatedWords})

  }


  const wordRows = json.words.map((word, index) => (
    <tr key={word.id}>
      <td id='wordID'>{word.id}</td>
      <td>
        {word.editable?
        (<input type="text" value={word.word}/>)
        :(word.word)}</td>

      <td>{word.editable?
      (<input type='text' value={word.translation}/>)
      :(word.translation)}</td>

      <td>
        <button className="save-button" onClick={()=>SaveIt(index)} >Сохранить</button>
        <button className="edit-button" onClick={()=>EditIt(index)} >Редактировать</button>
        <button className="delete-button" onClick={()=>DeleteIt(index)}>Удалить</button>
      </td>
    </tr>
  ));

  return (
    <div className='main'>
      <h2>Мои слова</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Слово</th>
            <th>Перевод</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>{wordRows}</tbody>
      </table>
      {json.words.map((word) => (
        <Train key={word.id} translation={word.translation} value={word.word} />
      ))}
    </div>
  );
}


export default WordList;