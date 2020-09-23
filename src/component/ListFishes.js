import React, { useEffect, useState } from 'react';
import EditFishes from './EditFishes';

const ListFishes = () => {
  const [fishes, setFishes] = useState([]);

  const deleteFish = async (id) => {
    try {
      const deleteFish = await fetch(`http://localhost:3001/fishes/${id}`, {
        method: 'DELETE',
      });
      setFishes(fishes.filter((fish) => fish.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const getFishes = async () => {
    try {
      const response = await fetch('http://localhost:3001/fishes');
      const jsonData = await response.json();
      setFishes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getFishes();
  }, []);

  const styles = {
    color: '#ffffff',
  };
  const sizes = {
    fontSize: '20px',
  };

  return (
    <div>
      <table className='table mt-5 text-center' style={styles}>
        <thead>
          <tr>
            <th style={sizes}>Name Of Fish</th>
            <th style={sizes}>Type Of Fish</th>
            <th style={sizes}>Edit</th>
            <th style={sizes}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {fishes.map((fish) => (
            <tr key={fish.id}>
              <td>{fish.name}</td>
              <td>{fish.type}</td>
              <td>
                <EditFishes fish={fish} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteFish(fish.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFishes;
