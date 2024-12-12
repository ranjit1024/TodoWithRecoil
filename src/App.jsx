import { useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { filterAtom, todoAtom , filteredTodoSelector} from "./store/atoms/count";
import { use } from "react";


function App() {
  return <div style={{
    textAlign:"center"
  }}>
    <h1 style={{
      fontSize:'50px',
      fontFamily:"sans-serif",
      color:"blue"
    }}>Todo...</h1>
    <hr />

    <RecoilRoot>
      <AllComponet></AllComponet>
    </RecoilRoot>
  </div>;
}

function AllComponet(){
  return<>
    <Todo></Todo>
    <FilterTodo></FilterTodo>
    <TodoRenderer></TodoRenderer>
  
  </>
}

function Todo(){
  const todoRef = useRef(0);
  const desRef = useRef(0);
  const setTodo = useSetRecoilState(todoAtom);
  return <div>
    <input type="text" placeholder="Enter A todo" ref={todoRef} style={{
      padding:"10px",
      width:"30vw",
      margin:"10px",
      fontSize:"20px"
    }}/><br></br>
    <input type="text" placeholder="Enter Todo Descripition "  ref={desRef} style={{
      padding:"10px",
      width:"30vw",
      margin:"10px",
      fontSize:"20px"
    }}/> <br />

    <button style={{
      padding:"10px 20px",
      fontSize:"20px",
    }} onClick={(e)=>{
      setTodo((oldTodoList) => [
        ...oldTodoList,{
          id:Math.floor(Math.random()*10),
          title:todoRef.current.value,
          des:desRef.current.value
        }
      ]);
      
    }}> Add Todo</button>

    
  </div>
}
function FilterTodo(){
  const searchTodo = useSetRecoilState(filterAtom);

  return <>
    <input type="text" placeholder="Search " style={{
      padding:"10px",
      width:"30vw",
      margin:"10px",
      fontSize:"20px"
    }} onChange={(e)=>{
        searchTodo(search => e.target.value);     
    }}/> <br />
  </>
}


function TodoRenderer(){
  const todos = useRecoilValue(todoAtom);
  const filteredTodo = useRecoilValue(filteredTodoSelector);

  return <div>
    {
    filteredTodo.map(todo => {
      
      return <div style={{
       margin:"10px auto",
        color:"white",
       backgroundColor:"green",
        width:"30vw"
      }} key={todo.id}>
        <p style={{
          fontSize:"20px"
        }}>{todo.title}</p>
        <p style={{
          fontSize:"20px"
        }}>{todo.des}</p>
      </div>
      
    })
    }
  </div>
}
export default App;
