import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const getCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching fact:', error);
      setFact('Failed to fetch a fact. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Cat Fact Generator 🐱</h1>
      <button onClick={getCatFact} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Get a Cat Fact
      </button>
      <p style={{ marginTop: '30px', maxWidth: '600px', margin: 'auto' }}>
        {loading ? 'Loading...' : fact}
      </p>
    </div>
  );
}

export default App;
