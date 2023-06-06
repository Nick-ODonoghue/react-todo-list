import './App.css';

function App() {
  return (
    <>
      <div className=' border-2 container mx-auto flex justify-center items-center min-h-screen'>
        <form action=''>
          <div className='flex flex-col gap-1'>
            <label htmlFor='item' className=' font-semibold'>
              New Item
            </label>
            <input
              type='text'
              id='text'
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              value='New Item'
            />
          </div>
          <button
            className=' my-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full'
            type='button'
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
