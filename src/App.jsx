import { useState } from 'react';
import './App.css';

function App() {
  // Setting useState for new items
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  // New item event handler calling setNewItem
  const handleNewItem = (e) => {
    setNewItem(e.target.value);
  };

  // Form submit handler
  const handleSubmit = (e) => {
    // Prevent default page refresh
    e.preventDefault();

    // Pass a function into setTodos state setter with the current todos list parameter
    setTodos((currentTodos) => {
      // Return an array of objects
      return [
        // Spread the current todos (if any) into a new array so we can add to it
        ...currentTodos,
        // Set each item in the todos array as an object with id, title & completed values
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem('');
  };

  return (
    <>
      <div className=' px-2 pt-4 border-2 container mx-auto items-center min-h-screen flex flex-col gap-4'>
        {/* Submit handler for the form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor='item' className=' font-semibold mb-10'>
            New Item
          </label>
          <input
            // onChange listener calling new item event handler
            onChange={handleNewItem}
            type='text'
            id='item'
            className=' my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            // Setting value of the input to our state newItem
            value={newItem}
          />
          <button
            className=' my-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full'
            type='submit'
          >
            Add
          </button>
        </form>
        <h1 className=' font-bold text-2xl'>ToDo List</h1>
        <ul className=' w-1/2'>
          {/* Map through our todos array to dynamically render our todos list */}
          {todos.map((todo) => {
            return (
              <li key={todo.id} className='flex justify-between pb-4'>
                <label htmlFor='checkbox' className='flex gap-2'>
                  <input type='checkbox' checked={todo.complete} />
                  <span className='self-center font-semibold'>
                    {todo.title}
                  </span>
                </label>
                <button className='bg-transparent hover:bg-slate-400 text-red-700 font-semibold hover:text-red-700 py-1 px-3 border border-red-700 hover:border-transparent rounded'>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
