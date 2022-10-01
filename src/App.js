import { useEffect, useState } from 'react';
import './App.css';
import { Square } from './Square';

function App() { 

   const instate=["","","","","","","","","",""]

   const [gamestate,setgameState]=useState(instate)
   const [change1,setchange1]=useState(false)
     
   const change=(i)=>{
    let a= Array.from(gamestate)
       a[i]=change1?"O":"X";
      setgameState(a)   
         setchange1(!change1)  
   } 
   useEffect(()=>{
    const b=checkwinner();
     if(b==='X')
      {alert(`hey X is winner  congratualation ${b}`)
      }
      else if(b==="O")
           { alert(`hey Zero is winner congratualation   ${b}`)}
   },[gamestate])
  
 const checkwinner=()=> {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
      return gamestate[a]
    } 
  }
  return null
}


  return (
    
    <div className="flex justify-center items-center flex-col     space-x-9  bg-gradient-to-b from-black to-gray-600  h-screen  "> 
    <div> <h1 className=' mb-8 font-bold text-5xl text-white '> Tic-Toc-Toe game</h1></div>
     <div className=' flex flex-row  ml-9 justify-center items-center  '>
     <Square className=" border-r-4  text-red-500 border-b-4  rounded-md  border-lime-400  pl-6  pt-2 text-3xl font-bold  cursor-pointer  w-20 h-20"  onClick={()=>change(0)} gamestate={gamestate[0]} /> 
     <Square  className=" border-r-4  text-red-500  border-b-4  rounded-md border-lime-400  pl-6 pt-2   text-3xl font-bold  cursor-pointer w-20 h-20  "  onClick={()=>change(1)}  gamestate={gamestate[1]}/>  
     <Square  className="   border-b-4   text-3xl font-bold  text-red-500 rounded-md  border-b-lime-400 cursor-pointer w-20 h-20  pl-6 pt-2  "  onClick={()=>change(2)} gamestate={gamestate[2]}/>   
     </div>
   
     <div className=' flex flex-row  '>
     <Square className=" border-r-4  text-red-500 border-b-4  rounded-md  border-lime-400 text-3xl  font-bold cursor-pointer w-20 h-20  pl-6 pt-2 " onClick={()=>change(3)} gamestate={gamestate[3]}/> 
     <Square  className=" border-r-4  text-red-500 border-b-4 rounded-md  border-lime-400 text-3xl font-bold cursor-pointer w-20 h-20  pl-6 pt-2"onClick={()=>change(4)} gamestate={gamestate[4]}/>  
     <Square  className="   border-b-4  text-red-500 rounded-md border-lime-400  text-3xl  font-bold cursor-pointer w-20 h-20  pl-6 pt-2 "onClick={()=>change(5)} gamestate={gamestate[5]}/>   
      </div>
     <div className=' flex flex-row '>
     <Square className=" border-r-4  text-red-500 text-3xl rounded-md   cursor-pointer w-20 h-20  pl-6 pt-2  font-bold  border-lime-400 " onClick={()=>change(6)}gamestate={gamestate[6]} /> 
     <Square  className=" border-r-4  text-red-500 text-3xl  rounded-md border-b-4  cursor-pointer w-20 h-20 font-bold pl-6 pt-2 border-lime-400"onClick={()=>change(7)} gamestate={gamestate[7]}/>  
     <Square  className="  text-red-500 text-3xl font-bold cursor-pointer w-20 h-20  pl-6 pt-2   border-lime-400 "onClick={()=>change(8)} gamestate={gamestate[8]}/>   
       </div> 

    <div > <h1 className='h-25 text-sky-800  font-bold w-59'>vineeth</h1></div>
    <button className="  bg-gradient-to-r from-indigo-500 via-yellow-600 to-cyan-500 md:w-40  w-32 flex mt-3 justify-center py-1 px-2   items-center rounded-md    " onClick={()=>setgameState(instate)}> Clear</button>
    </div>
  );
}

export default App;
