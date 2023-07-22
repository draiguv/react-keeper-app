import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import data from '../data/notes.js';

export default function App() {
  return (
    <div>
      <Header />
      
      {data.map(data =>
        <Note
          key={data.key}
          title={data.title}
          content={data.content}
        />
      )}
      
      <Footer />
    </div>
  );
}
