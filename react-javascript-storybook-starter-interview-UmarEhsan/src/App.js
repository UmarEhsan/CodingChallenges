import React from 'react';
import './App.css';
import { Bestsellers } from './components/Bestsellers';
import { Chat } from './components/Chat';

function App() {
  const sellers = [
    {
      "id": "hdmdu0t80yjkfqselfc",
      "name": "Nike Air Max 270",
      "price": "195.80",
      "shortDesc": "Nike",
      "isSelected": true

    },
    {
      "id": "3dc7fiyzlfmkfqseqam",
      "name": "Nike Air Max 90",
      "price": "195.80",
      "shortDesc": "Nike",
      "isSelected": false

    },
    {
      "id": "aoe8wvdxvrkfqsew67",
      "name": "Nike Air Max Plus",
      "price": "195.80",
      "shortDesc": "Nike",
      "isSelected": false
    }]
  return (
    <div className="App">
      <div style={{ width: '45%', float:'left' }}>
        <Bestsellers
          label="Bestsellers"
          sellers={sellers} />
      </div>
      <div style={{ width: '45%', float:'left', marginLeft:'10px' }}>
        <Chat label="Chat" />
      </div>




    </div>
  );
}

export default App;
