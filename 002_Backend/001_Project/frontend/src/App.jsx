import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data[0].jokes); // Corrected to access the 'jokes' array inside the response data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <>
      <p>Hello</p>
      
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, id) => (
        <div key={id}>
          <h3>{joke.question}</h3>
          <p>{joke.answer}</p>
        </div>
      ))}
    </>
  );
}

export default App;
