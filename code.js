import React from 'react';
import './App.css';
 import ChoirCard from './ChoirCard';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Choir</h1>
        <h3>Welcome to our choir, where voices blend in perfect harmony to create unforgettable musical experiences. Our choir is more than just a group of singers; it's a community bound by a shared passion for music and a commitment to artistic excellence.</h3>
      </header>
      <div className="card-container">
        <ChoirCard
          title="Musician"
          description=" "
          imageUrl="https://www.w3schools.com/w3css/img_avatar3.png "
        />
        <ChoirCard
          title="Co-singer"
          description=" "
          imageUrl="https://www.w3schools.com/howto/img_avatar2.png "
        />
        <ChoirCard
          title="Mentor"
          description=" "
          imageUrl="https://www.w3schools.com/w3css/img_avatar3.png "
        />
      </div>
    </div>
  );
}

export default App;

