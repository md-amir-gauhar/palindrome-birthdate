import { useState } from 'react';

import './App.css';

function App() {
  const [bdate, setBdate] = useState();
  return (
    <div className="app">
      <div className="main_container">
        <header>
          <h1 className="heading">Palindrome Birthdate?</h1>
        </header>
        <div className="input_container">
          <span>Enter your birthdate</span>
          <input type="date" value={bdate} onChange={e => setBdate(e.target.value)} />
          <span className="note">
            We will check them in the formats: yyyy-mm-dd, yy-mm-dd, mm-dd-yy, dd-mm-yyyy
          </span>
          <button>check</button>
        </div>
      </div>
      <div className="side_container"></div>
    </div>
  );
}

export default App;
