import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

function App() {

  const [ sharpen, setSharpen ] = React.useState(false);
  React.useEffect( () => {
    const t = setTimeout( () => {
      setSharpen(true);
    }, 5000)
    return () => clearTimeout(t);
  }, [setSharpen])

  return (
    <main className={sharpen ? "App sharpen" : "App"}>
      <Typing>
        <h1>We are<br/>Frontend &<br />Mobile</h1>
        <h2>Stay tuned for more content ...</h2>
      </Typing>
    </main>
  );
}

export default App;
