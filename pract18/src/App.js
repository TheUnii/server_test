import './App.css';
import { useState } from 'react'; 
import { SimpleCounter, ColorChanger, TextDisplay, PasswordToggle, UserStatus } from './components/main';

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <ColorChanger />
      <TextDisplay />
      <PasswordToggle />
      <UserStatus />
    </div>
  );
}

export default App;
