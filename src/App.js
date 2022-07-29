import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {

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
      <form onSubmit={handleSubmit} class="form">
      <h1>React Form</h1>
      <div className="input">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        </div>
       <br/>
        <div className="input">
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={state.surname}
            onChange={(e) => handleChange(e)}/>
        </label>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
  <br/>
      <div className="display">
        {list.length>0 && <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list &&
              list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>
                    <div>
                    <button onClick={() => handleDelete(item.id)}>Delete
                    </button>
                    </div>                      
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>}
      </div>
    </div>
  );
};

export default App;
