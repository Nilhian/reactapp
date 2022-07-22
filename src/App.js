import { useState , useEffect}  from "react";
import "./App.css";
import SearchBox from './components/searchbox';
import axios from 'axios';
import RestList from './components/restlist';

export default function App() {
  const pino = async () => {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users") ;
    
        let data = res.data;
        return data;
      } catch (error) {
        console.log(error.response); 
    
        return error.response;
      }
  };
  useEffect(() => {
    pino().then(res => {
        console.log("res is ", res);
    });
  }, []);
  return (
    <SearchBox />
  )

}
