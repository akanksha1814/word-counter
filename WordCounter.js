// WordCounter.js
import React, { useState } from 'react';
const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countWords = () => {
    const words = text.split(/\s+/);
    return words.filter((word) => word !== '').length;
  };
  <p> Word Counter </p>

  return (
    <div>
      <p> Word Counter </p>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;
