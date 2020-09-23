import React, { useState } from 'react';

const EditFishes = ({ fish }) => {
  const [name, setName] = useState(fish.name);
  const [type, setType] = useState(fish.type);

  const updateName = async(e) => {
    e.preventDefault();
    try {
      const body = { name, type };
      const response = await fetch(`http://localhost:3001/fishes/${fish.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
     
      window.location = '/';
    } catch (error) {
      console.error(error.message)
    }
  };

  const firstColor = {
    color: '#ffffff',
  };
  const secolor = {
    color: '#000000',
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-warning'
        data-toggle='modal'
        data-target={`#id${fish.id}`}
        style={firstColor}
      >
        Edit
      </button>

      <div
        className='modal'
        id={`id${fish.id}`}
        onClick={() => setName(fish.name)}
        onClick={() => setType(fish.type)}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title' style={secolor}>
                Edit Fish
              </h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={() => setName(fish.name)}
                onClick={() => setType(fish.type)}
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={name}
                onChange={ e => setName(e.target.value)}
              />
              <input
                type='text'
                className='form-control'
                value={type}
                onChange={ e => setType(e.target.value)}
              />
            </div>

            <div className='modal-footer'>
              <button
                style={secolor}
                type='button'
                className='btn btn-warning'
                data-dismiss='modal'
                onClick={(e) => updateName(e)}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
                style={secolor}
                onClick={() => setName(fish.name)}
                onClick={() => setType(fish.type)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFishes;
