import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';
import CareerFramework from './CareerFramework/CareerFramework';

function App() {

  const [ sharpen, setSharpen ] = React.useState(false);
  React.useEffect( () => {
    const t = setTimeout( () => {
      setSharpen(true);
    }, 5000)
    return () => clearTimeout(t);
  }, [setSharpen])

  return (
    <>
    <main className={sharpen ? "App" : "App"}>
      <Typing>
        <h1>We are<br/>Frontend &<br />Mobile</h1>
      </Typing>
    </main>
    <CareerFramework />
    </>

    
  );
}

export default App;
