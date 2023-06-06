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

  // Toggle completion state of each todo item taking id and completed parameters
  const toggleTodo = (id, completed) => {
    // Call setTodos state setter passing it the current todos array parameter
    setTodos((currentTodos) => {
      // Map through current todos array
      return currentTodos.map((todo) => {
        // Conditional to check for the id parameter in our todos array
        if (todo.id === id) {
          // When id is found, then set the completed value to true
          return { ...todo, completed };
        }
        // If id is not found then we can just return todo (the original todos array)
        return todo;
      });
    });
  };

  // Todo deletion function taking an id paramter
  const deleteTodo = (id) => {
    // Call setTodos state setter passing it the current todos array paramter
    setTodos((currentTodos) => {
      // Filter our current todos array and return all items that do not equal the id parameter being passed in
      return currentTodos.filter((todo) => todo.id !== id);
    });
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
          {todos.length === 0 && "No ToDo's Added"}
          {/* Map through our todos array to dynamically render our todos list */}
          {todos.map((todo) => {
            return (
              <li key={todo.id} className='flex justify-between pb-4'>
                <label htmlFor='checkbox' className='flex gap-2'>
                  <input
                    type='checkbox'
                    checked={todo.completed}
                    // onChange calling toggleTodo and passing it the id & checked values as arguments
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  <span
                    className={`self-center font-semibold ${
                      todo.completed ? ' line-through font-normal' : ''
                    }`}
                  >
                    {todo.title}
                  </span>
                </label>
                <button
                  // onClick calling deleteTodo function and passing it the todo id as an argument
                  onClick={() => deleteTodo(todo.id)}
                  className='bg-transparent hover:bg-slate-400 text-red-700 font-semibold hover:text-red-700 py-1 px-3 border border-red-700 hover:border-transparent rounded'
                >
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
