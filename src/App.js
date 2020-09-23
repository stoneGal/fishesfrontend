import React from 'react';
import './App.css';
import InputFish from './component/InputFish';
import ListFishes from './component/ListFishes';

const App = () => {
  return (
    <div className='container-fluid' >
      <div className='wrapper'>
      <div className='innerdiv'>
        <div className='midcontent'>
          <InputFish />
          <ListFishes />
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default App;
