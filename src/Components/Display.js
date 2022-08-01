import React from 'react';


const Display = (props) => {
    const {list, handleDelete} =props
    return <div>
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
    </div>;
}


export default Display;