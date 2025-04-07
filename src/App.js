import React from 'react'
import './index.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import {useState} from 'react';
import AddItem from './AddItem';

function App() {
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist'))
    );
    const[newItem, setNewItem] = useState('')
    const[search, setSearch] = useState('');
    const handleCheck = (id) => {
      console.log(`key: ${id}`);
      const listItems = items.map((item) =>
        item.id === id ? {...item, checked : !item.checked} : item
      );
      setAndSaveItem(listItems);
    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItem(listItems);
    }

    const setAndSaveItem = (newItems) => {
      setItems(newItems)
      localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked: true, item}
      const listItems = [...items, myNewItem];
      setAndSaveItem(listItems);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);
      setNewItem('')

    }

  return (
    <div className='App'>
      <Header title="Grocery List"/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
