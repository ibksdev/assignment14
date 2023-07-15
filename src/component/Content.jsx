import React, { useState } from 'react';

function Content() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(document.getElementById('textarea').value);
  };

  return (
    <div>
    
   
        <textarea id="textarea" rows="4" cols="50" />
        <br></br>
        <button onClick={handleButtonClick}>Display Text</button>
        <p>{displayText}</p>
  
    </div>
  );
}

export default Content;
