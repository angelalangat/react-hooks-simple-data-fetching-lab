import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImageUrl(data.message);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run once on component mount

  return (
    <div>
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default App;
