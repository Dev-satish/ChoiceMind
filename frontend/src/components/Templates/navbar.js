import React from 'react';

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header
        className="header"
        style={{
          backgroundColor: '#2196f3',
          padding: '1rem 0',
        }}
      >
        <div className="navbar" style={{ justifyContent: 'space-between' }}>
          <ul className="menu" style={{ listStyle: 'none', display: 'flex', alignContent: "left", gap: '1rem' }}>
            <li><a href="#features" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none' }}>Features</a></li>
            <li><a href="#templates" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none' }}>Templates</a></li>
            <li><a href="#pricing" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none' }}>Pricing</a></li>
            <li><a href="#contact" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none' }}>Contact</a></li>
          </ul>
          <button style={{ paddingLeft:"20px",padding: '10px 20px', backgroundColor: '#c01d32', color: '#ffffff', border: 'none', borderRadius: '4px', fontSize: '14px' }}>Sign in</button>
        </div>
      </header>

    </div>
  );
};

export default App;
