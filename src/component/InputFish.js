import React, { useState } from 'react';

const InputFish = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, type };
      const response = await fetch('http://localhost:3001/fishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (error) {}
  };

  const stylebutton={
    backgroundColor:'#00BFFF',
    color:"#ffffff",
    padding:"4px 15px",
    marginTop:'5px'
  }
  const header={
    marginBottom: '45px',
    color:'#00BFFF'
  }
  return (
    <div>
      <h1 style={header}>Fish Record Application</h1>
      <form onSubmit={onSubmitForm}>
        <label htmlFor='name'>
          Enter your prefered name of fish:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{' '}
        </label>
        <br/>
        <br/>
        <label htmlFor='type'>
          Enter your prefered type of fish:
          <input
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
          />{' '}
        </label>
        <br/>
        <button style={stylebutton} >Add</button>
      </form>
    </div>
  );
};

export default InputFish;
