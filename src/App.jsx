import { useState } from 'react';
import './App.css';

function App() {
  // Setting useState for new items
  const [newItem, setNewItem] = useState('');

  // New item event handler calling setNewItem
  const handleNewItem = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <>
      <div className=' px-2 pt-4 border-2 container mx-auto items-center min-h-screen flex flex-col gap-4'>
        <form action=''>
          <label htmlFor='item' className=' font-semibold mb-10'>
            New Item
          </label>
          <input
            // onChange listener calling new item event handler
            onChange={handleNewItem}
            type='text'
            id='text'
            className=' my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            // Setting value of the input to our state newItem
            value={newItem}
          />

          <button
            className=' my-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full'
            type='button'
          >
            Add
          </button>
        </form>
        <h1 className=' font-bold text-2xl'>ToDo List</h1>
        <ul className=' w-1/2'>
          <li className='flex justify-between pb-4'>
            <label htmlFor='checkbox' className='flex gap-2'>
              <input type='checkbox' id='checkbox' />
              <span className='self-center font-semibold'>Item 1</span>
            </label>
            <button className='bg-transparent hover:bg-slate-400 text-red-700 font-semibold hover:text-red-700 py-1 px-3 border border-red-700 hover:border-transparent rounded'>
              Delete
            </button>
          </li>
          <li className='flex justify-between pb-2'>
            <label htmlFor='checkbox' className='flex gap-2'>
              <input type='checkbox' id='checkbox' />
              <span className='self-center font-semibold'>Item 2</span>
            </label>
            <button className='bg-transparent hover:bg-slate-400 text-red-700 font-semibold hover:text-red-700 py-1 px-3 border border-red-700 hover:border-transparent rounded'>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
