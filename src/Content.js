import React from 'react'
import {useState} from 'react';

const Content = () => {

  const [name, setName] = useState('Gayathri')

  const handleNameChange =  () => {
    const names = ["Gayathri", "Ragupathi", "Yara"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
    console.log("You Clicked it");
  }

  const handleClick2 = (name) => {
    console.log(`${name} you Clicked it`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }


  return (
    <main>
      <p onDoubleClick={handleClick}> Hello {name}! </p>
      <button onClick={handleNameChange}>Click it</button>
      <button onClick={() => handleClick2('Gayu')}>Click it</button>
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content
