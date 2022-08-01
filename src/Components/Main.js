import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from './Form'
import Display from './Display'

const Main = () => {
   
   
    const [state, setState] = useState({
        name: "",
        surname: "",
      });
    
      const [list, setList] = useState([]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(state.name === '' && state.surname === ''){
         return alert('Please enter name and surname')
        }
        state.id = uuidv4();
        setList([...list, state]);
        setState({
          name: "",
          surname: "",
        })
      };
    
      const handleChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleDelete = (id) => {
        let newlist = list.filter((item) => item.id !== id);
        setList([...newlist]);
      };
    
      return (
        <div className="container">
       <Form state={state} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <br/>
          <Display list={list} handleDelete={handleDelete}/>
        </div>
      );

}
export default Main;