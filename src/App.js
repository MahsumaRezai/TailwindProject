import './styles/tailwind.css';


function App() {
  return (

    <div className="flex flex-row justift-center justify-items-center">
      <div className="flex flex-row  gap-10 flex-wrap w-80 bg-green-200 justify-center p-10 m-auto mt-20 ">
        <h1 className="bg-blue-300 p-3 hover:bg-red-600">This is my frist Tailwind style</h1>
        <div className='bg-red-200 p-2 w-60 hover:bg-green-200  flex grow-1 flex-row justify-center justify-items-center h-10'>1</div>
        <div className="bg-red-200 p-2 w-60 h-10 hover:bg-green-200 grow-0 flex flex-row justify-center ">2</div>
        <div className="bg-red-200 p-2 w-60 h-10 hover:bg-green-200 grow-0 flex flex-row justify-center justify-items-center">3</div>
      </div>
    </div >
  );
}

export default App;
