import React from 'react';


const Form = (props) => {
    const {state,handleSubmit,handleChange} = props
    return <div>
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

    </div>;
}


export default Form;